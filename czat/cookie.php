<?php
    $nick = $_POST['nick'];
    setcookie("nick", $nick);
    header("Location: czat.php");
    exit();
?>