<?php
session_start();

$data = json_decode(file_get_contents('php://input'), true);

$_SESSION['eq'] = $data;

http_response_code(200);
?>
