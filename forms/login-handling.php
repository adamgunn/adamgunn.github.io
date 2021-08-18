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
    
    $username = "";
    $entered_password = "";
    $matched_id = 0;
    $stored_password = "";

    $prepared_info = $conn->prepare("SELECT id from users_info WHERE username=?");
    $prepared_info->bind_param("s", $username);
    $prepared_pwd = $conn->prepare("SELECT password from users_passwords WHERE id=?");
    $prepared_pwd->bind_param("i", $matched_id);

    function verify_login() {
        if(isset($_POST['email'])) {
            global $username, $entered_password, $matched_id, $stored_password, $prepared_info, $prepared_pwd;
            $username = $_POST['username'];
            $entered_password = $_POST['password'];
            $prepared_info->execute();
            $result = $prepared_info->get_result();
            if ($result->num_rows < 1) {
                return 'There isn\'t an account associated with that username.';
            } else {
                $field = $result->fetch_object();
                $matched_id = $field->id;
                $prepared_pwd->execute();
                $result = $prepared_pwd->get_result();
                if ($result->num_rows < 1) {
                    return 'There was an error with the database..';
                } else {
                    $field = $result->fetch_object();
                    $stored_password = $field->password;
                    if (password_verify($entered_password, $stored_password)) {
                        return 'Your login was a success.';
                    } else {
                        return 'Incorrect password.';
                    }
                }
            }
        }
        return 'The form didn\'t submit correctly.';
    }

    $result = verify_login();
    echo $result;
?>