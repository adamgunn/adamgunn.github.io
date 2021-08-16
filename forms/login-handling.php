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
    
    $email = "";
    $entered_password = "";
    $matched_id = 0;
    $stored_password = "";

    $prepared_fle = $conn->prepare("SELECT id from users_firstlastemail WHERE email=?");
    $prepared_fle->bind_param("s", $email);
    $prepared_pwd = $conn->prepare("SELECT password from users_passwords WHERE id=?");
    $prepared_pwd->bind_param("i", $matched_id);

    function verify_login() {
        if(isset($_POST['email'])) {
            global $email, $entered_password, $matched_id, $stored_password, $prepared_fle, $prepared_pwd;
            $email = $_POST['email'];
            $entered_password = $_POST['password'];
            $prepared_fle->execute();
            $result = $prepared_fle->get_result();
            if ($result->num_rows < 1) {
                return 'no account';
            } else {
                $field = $result->fetch_object();
                $matched_id = $field->id;
                $prepared_pwd->execute();
                $result = $prepared_pwd->get_result();
                if ($result->num_rows < 1) {
                    return 'database fail';
                } else {
                    $field = $result->fetch_object();
                    $stored_password = $field->password;
                    if (password_verify($entered_password, $stored_password)) {
                        return 'login success';
                    } else {
                        return 'login fail';
                    }
                }
            }
        }
        return 'form fail';
    }

    $result = verify_login();
    echo $result;
?>