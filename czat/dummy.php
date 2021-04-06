<?php
$wiadomosc = $_POST['message'];
$wyslij = $_COOKIE["nick"] . ": " . $wiadomosc . PHP_EOL;
$plik = fopen("messages.txt", "a");
fwrite($plik, $wyslij);
fclose($plik);