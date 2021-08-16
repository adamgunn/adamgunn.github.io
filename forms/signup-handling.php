<?php
    $servername = "localhost:3306";
    $db_username = "adamgunn_database_user";
    $db_password = "!\$yZ+7TJd+cf";
    $dbname = "adamgunn_users_database";

    $conn = new mysqli($servername, $db_username, $db_password, $dbname);
    if ($conn->connect_error) {
        die($conn->connect_error);
        exit(1);
    }
    $given_name = "";
    $family_name = "";
    $email = "";
    $password = "";

    $prepared = $conn->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
    $prepared->bind_param("ssss", $given_name, $family_name, $email, $password);

    function valid_signup() {
        if (isset($_POST['given-name'])) {
            global $prepared, $given_name, $family_name, $email, $password;
            $given_name = $_POST['given-name'];
            $family_name = $_POST['family-name'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $prepared->execute();
            return TRUE;
        }
        return FALSE;
    }
    
    if (valid_signup()) {
        header('Location: ../sign-up/success.html'); 
    }

    $conn->close();
?>