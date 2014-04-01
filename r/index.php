<?php

$base = 'https://html5sec.org';

$payloads = array(
    'script'     => $base.'/<script>alert(1)</script>/',
    'javascript' => 'javascript:alert(1)',
    'data'       => 'data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
    'jar'        => 'jar:javascript:alert(1)'
);

$statuses = array(
    301 => 'Moved Permanently',
    302 => 'Found',
    303 => 'See Other',
    307 => 'Temporary Redirect',
    308 => 'Permanent Redirect',
    999 => 'I am feeling funny'
);

$protocol = (substr($_SERVER['SERVER_PROTOCOL'], -1 === '1') ? 'HTTP/1.1' : 'HTTP/1.0');
$code     = $_GET['code'];
$payload  = $_GET['payload'];

if(@$statuses[$code]) {
    header($protocol.' '.$code.' '.$statuses[$code]);
}

if(@$payloads[$payload]) {
    header('Location: '.$payloads[$payload]);
} else {
    header('Location: '.$payloads['script']);
}
die();

