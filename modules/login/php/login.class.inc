<?php

namespace LORIS\login;
/**
 * Implements the main LORIS user login page to handle authentication
 * of users.
 *
 * @category LORIS_Module
 * @package  Login
 * @author   Dave MacFarlane <david.macfarlane2@mcgill.ca>
 *           Alizée Wickenheiser <alizee.wickenheiser@mcin.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
class Login extends \NDB_Page
{
    public $skipTemplate = true;

    /**
     * Include additional JS files
     *
     * @return array of javascript to be inserted
     */
    function getJSDependencies()
    {
        $factory = \NDB_Factory::singleton();
        $baseURL = $factory->settings()->getBaseURL();
        $deps    = parent::getJSDependencies();
        return array_merge(
            $deps,
            [
                $baseURL . '/login/js/loginIndex.js',
            ]
        );
    }
    /**
     * Include additional CSS files:
     *
     * @return array of javascript to be inserted
     */
    function getCSSDependencies()
    {
        $factory = \NDB_Factory::singleton();
        $baseURL = $factory->settings()->getBaseURL();
        $deps    = parent::getCSSDependencies();
        return array_merge(
            $deps,
            [$baseURL . '/login/css/login.css']
        );
    }

    /**
     * Add dependency for password visibility
     *
     * @return array of javascript files to be sourced
     */
    function getJSDependencies()
    {
        $factory  = \NDB_Factory::singleton();
        $baseurl  = $factory->settings()->getBaseURL();
        $baseDeps = parent::getJSDependencies();

        return array_merge(
            $baseDeps,
            [
                $baseurl . '/js/passwordVisibility.js',
                $baseurl . '/login/js/login_helper.js',
            ]
        );
    }

    /**
     * Include additional CSS files:
     *  1. configuration
     *
     * @return array of CSS to be inserted
     */
    function getCSSDependencies()
    {
        $factory = \NDB_Factory::singleton();
        $baseURL = $factory->settings()->getBaseURL();
        $deps    = parent::getCSSDependencies();
        return array_merge(
            $deps,
            [
                $baseURL . "/css/password.css",
            ]
        );
    }

}
