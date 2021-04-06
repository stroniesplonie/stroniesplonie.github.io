<!DOCTYPE html>
<html lang="pl-PL">
<style>

    * {
        font-family: Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
    }


    header {
        background-color: #ccc;
        padding: 15px;
        text-align: center;
        font-size: 30px;
    }


    a:link, a:visited {
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    a:hover, a:active {
        background-color: #4CAF50;
        color: white;
    }


    section {
        width: 100vw;
    }


    aside {
        position: fixed;
        float: left;
        padding: 15px;
        width: 20%;
        height: 100%;
        background: #f1f1f1;
        box-sizing: border-box;
    }


    article {
        position: fixed;
        float: left;
        right: 0;
        padding: 15px;
        height: 100%;
        width: 80%;
        box-sizing: border-box;
    }


    #demo {
        box-sizing: border-box;
        height: 80%;
        overflow-y: auto;
    }
    

    #text {
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: #ccc;
        padding: 10px;
        width: 80%;
        text-align: left;
        box-sizing: border-box;
    }


    input[type=text] {
        width: 90%;
        padding: 12px 20px;
        margin: 8px 8px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }


    input[type=image] {
        position: fixed;
        width: 50px;
        color: white;
        right: 0;
        margin: 5px 2.5%;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }    

</style>

<head>
    <script src="fetch.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Czat</title>
</head>

<body>
    <header>
        <h2>Czat</h2>
    </header>

    <section>
        
        <aside>
           <p>Hej <?php echo $_COOKIE["nick"]?>!</p><br><br>
           <a href="logowanie.php">Zmień nick</a>
        </aside>
    
        <article>
            <div id="demo"></div>
            <div id="text">
                <form onsubmit="return fetchpost()">
                    <input type="text" id="msg" name="message"><input type="image" src="send.png" alt="Submit">
                </form>
            </div>
        </article>
        
    </section>

</body>

</html>

<?php



/*if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $wiadomosc = $_POST['message'];
    $wiadomosc = $_POST['message'];
    $wiadomosc = $_COOKIE["nick"] . '~' . $wiadomosc . '`';
    $myfile = fopen("messages.txt", "a");
    fwrite($myfile, $wiadomosc);
    fclose($myfile);
}


function wyslij() {
    $wiadomosc = $_POST['message'];
    $myfile = fopen("messages.txt", "a");
    fwrite($myfile, $wiadomosc);
    fclose($myfile);
}
*/
?>