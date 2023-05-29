<?php
session_start();
unset($_SESSION['page_views']);
unset($_SESSION['eq']);
header("Location: /gra/");
exit;
?>