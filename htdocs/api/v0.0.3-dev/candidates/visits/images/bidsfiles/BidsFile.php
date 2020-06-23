<?php
/**
 * Handles API requests for image level BIDS files.
 *
 * PHP Version 5.5+
 *
 * @category Main
 * @package  API
 * @author   Cecile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
namespace Loris\API\Candidates\Candidate\Visit\Imaging;
require_once __DIR__ . '/../Image.php';
/**
 * Handles API requests for image level BIDS files. Extends
 * Visit so that the constructor will validate the visit
 * portion of URL automatically.
 *
 * @category Main
 * @package  API
 * @author   Cecile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
class BidsFile extends \Loris\API\Candidates\Candidate\Visit\Imaging\Image
{
    /**
     * Construct a visit class object to serialize candidate visits
     *
     * @param string $method     The method of the HTTP request
     * @param string $CandID     The CandID to be serialized
     * @param string $VisitLabel The visit label to be serialized
     * @param string
     */
    public function __construct($method, $CandID, $VisitLabel, $MincFilename, $BidsFilename)
    {
        $requestDelegationCascade = $this->AutoHandleRequestDelegation;

        $this->AutoHandleRequestDelegation = false;

        if (empty($this->AllowedMethods)) {
            $this->AllowedMethods = ['GET'];
        }
        $this->CandID       = $CandID;
        $this->VisitLabel   = $VisitLabel;
        $this->MincFilename = $MincFilename;
        $this->BidsFilename = $BidsFilename;

        error_log(print_r( $this->BidsFilename, True ));

        //   $this->Timepoint = \Timepoint::singleton($timepointID);
        // Parent constructor will handle validation of
        // CandID
        parent::__construct($method, $CandID, $VisitLabel, $MincFilename);

        $results = $this->getDatabaseDir();
        if (empty($results)) {
            $this->header("HTTP/1.1 404 Not Found");
            $this->error("File not found");
            $this->safeExit(0);
        }

        if ($requestDelegationCascade) {
            $this->handleRequest();
        }
    }

    /**
     * Handles a GET request
     *
     * @return void but populates $this->JSON
     */
    public function handleGET()
    {
        $fullDir = $this->getFullPath();
        error_log(print_r($fullDir, TRUE));
        ob_end_clean();

        $fp = fopen($fullDir, "r");
        if ($fp === false) {
            $this->header("HTTP/1.1 500 Internal Server Error");
            error_log("Could not open $fullDir to send to client");
            $this->safeExit(1);
        }

        $this->Header('Cache-control: private');

        if (pathinfo($fullDir)['extension'] == 'tsv') {
            $contentType = 'text/tsv';
        } elseif (pathinfo($fullDir)['extension'] == 'json') {
            $contentType = 'application/json';
        } else {
            $contentType = 'text/plain';
        }
        $this->Header("Content-Type: $contentType");
        $this->Header('Content-Length: ' . filesize($fullDir));
        $this->Header('Content-Disposition: attachment; filename=' . $this->BidsFilename);

        while (!feof($fp)) {
            print fread($fp, 1024);
        }
        $this->safeExit(0);
    }

    /**
     * Calculate the entity tag for this image
     *
     * @return string
     */
    public function calculateETag()
    {
        $filename = $this->getFullPath();
        $stats    = stat($filename);
        return md5($stats['mtime'] . $stats['size'] . $filename);
    }

    /**
     * Gets the full path of this image on the filesystem, in order
     * to be able to pass it to an fopen command (or similar)
     *
     * @return string
     */
    protected function getFullPath()
    {
        return $this->getAssemblyRoot() . "/" . $this->getDatabaseDir();
    }

    /**
     * Gets the root of the assembly directory, so that we know where
     * to retrieve images relative to.
     *
     * @return string
     */
    protected function getAssemblyRoot()
    {
        $factory = \NDB_Factory::singleton();
        $config  = $factory->Config();
        return $config->getSetting("mincPath");
    }

    /**
     * Gets the filename saved in the database for this file
     *
     * @return string
     */
    protected function getDatabaseDir()
    {
        $factory = \NDB_Factory::singleton();
        $db      = $factory->Database();
        return $db->pselectOne(
            "SELECT FilePath
                FROM bids_export_files bef
                    JOIN files f ON (f.FileID=bef.FileID)
                    JOIN session s ON (f.SessionID=s.ID)
                    JOIN candidate c ON (s.CandID=c.CandID)
                WHERE c.Active='Y' AND s.Active='Y' 
                    AND c.CandID=:CID AND s.Visit_label=:VL
                    AND bef.FilePath LIKE CONCAT('%', :Fname)",
            array(
                'CID'   => $this->CandID,
                'VL'    => $this->VisitLabel,
                'Fname' => $this->BidsFilename,
            )
        );
    }

}

if (isset($_REQUEST['PrintFileData'])) {
    $obj = new BidsFile(
        $_SERVER['REQUEST_METHOD'],
        $_REQUEST['CandID'],
        $_REQUEST['VisitLabel'],
        $_REQUEST['Filename'],
        $_REQUEST['BidsFilename']
    );
    print $obj->toJSONString();
}