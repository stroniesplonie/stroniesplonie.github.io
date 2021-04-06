<!DOCTYPE html>
<html lang="pl-PL">
<style>

* {
    font-family: Helvetica, sans-serif;
}


input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


input[type=submit]:hover {
  background-color: #45a049;
}


div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
</head>
<body>
    <div>
        <form name="forma" action="cookie.php" onsubmit="return validateForm()" method="post" required>
            <label for="login">Wprowadź swój nick:</label><br>
            <input type="text" id="login" name="nick" placeholder="Podaj nick..."><br>
            <input type="submit">
        </form>
    </div>
    <script>
        function validateForm() {
            var x = document.forms["forma"]["nick"].value;
            if (x == "") {
                alert("Musisz podać nick");
                return false;
            }
        }
    </script>
</body>
</html>