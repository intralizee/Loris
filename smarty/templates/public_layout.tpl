{*
  This layout is used for all the 'public' modules
  (i.e Loris modules or pages that don't require user to be logged in)
*}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{$study_title}</title>
  <link rel="stylesheet" href="{$baseurl}/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="{$baseurl}/css/public_layout.css">
  <link type="image/x-icon" rel="icon" href="{$baseurl}/images/favicon.ico">
    <script src="{$baseurl}/js/loris.js" type="text/javascript"></script>
    <script language="javascript" type="text/javascript">
        let loris = new LorisHelper({$jsonParams}, {$userPerms|json_encode}, {$studyParams|json_encode});
    </script>
  {section name=jsfile loop=$jsfiles}
    <script src="{$jsfiles[jsfile]}" type="text/javascript"></script>
  {/section}

  {section name=cssfile loop=$cssfiles}
    <link rel="stylesheet" href="{$cssfiles[cssfile]}">
  {/section}
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="flex-wrapper">
        <div class="loris-logo">
          <a href="{$baseurl}">
            <img src="{$baseurl}/images/LORIS_logo_white.svg" class="loris-logo" alt="Loris Logo"/>
          </a>
        </div>
        <div class="study-title hidden-xs">
          {$study_title}
        </div>
        <div class="github-logo">
          <a href="https://github.com/aces/Loris" target="_blank" rel="noopener noreferrer">
            <img src="{$baseurl}/images/GitHub-Mark-Light-64px.png" alt="Github"/>
          </a>
        </div>
      </div>
    </div>
  </header>

  <div id="wrap">
{*    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" id="nav-left"></nav>*}
    <div id="page" class="container-fluid">
      <div class="page-content inset" style="padding: 20px;">
        <section class="lorisworkspace">
          {$workspace}
        </section>
      </div>
    </div>
  </div>

  <footer class="footer" style="bottom: 0; width: 100%">
    Powered by <a href="http://www.loris.ca/" target="_blank">LORIS</a>
    | GPL-3.0 &copy; {$currentyear} <br/>
    Developed at
    <a href="http://www.mni.mcgill.ca" target="_blank">
      Montreal Neurological Institute and Hospital
    </a>
    by <a href="http://mcin-cnim.ca" target="_blank">MCIN</a>
  </footer>
  <script src="{$baseurl}/js/modernizr/modernizr.min.js"/>
  <script>
    if (!Modernizr.webgl) {
      alert("Please download the latest version of Google Chrome of Mozilla Firefox in order to use Loris!");
    }
  </script>
</body>
</html>
