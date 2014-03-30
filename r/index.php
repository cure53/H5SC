<?php
//longurl.org has length limits, hence directory name 'r' (not redirect)
header('Location: http://html5sec.org/<script>alert(/a/)</script>/'); //I orginally used example.com (Didn't want to use example.invalid as some silly filters might block it)
die();
?>