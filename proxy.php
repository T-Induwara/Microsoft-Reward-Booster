<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$query = $_GET['q'];
$url = "https://www.bing.com/search?q=" . urlencode($query);
$response = file_get_contents($url);
echo $response;
?>
