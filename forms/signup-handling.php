<?php
    include 'db-credentials.php';

    $conn = new mysqli($servername, $db_username, $db_password, $dbname);
    if ($conn->connect_error) {
        die($conn->connect_error);
        exit(1);
    }
    $given_name = "";
    $family_name = "";
    $email = "";
    $username = "";
    $password = "";



    $prepared_fle = $conn->prepare("INSERT INTO users_info (first_name, last_name, email, username) VALUES (?, ?, ?, ?)");
    $prepared_fle->bind_param("ssss", $given_name, $family_name, $email, $username);
    $prepared_pwd = $conn->prepare("INSERT INTO users_passwords (password) VALUES (?)");
    $prepared_pwd->bind_param("s", $password);

    $prepared_check_email = $conn->prepare("SELECT id from users_info WHERE email=?");
    $prepared_check_email->bind_param("s", $email);
    $prepared_check_username = $conn->prepare("SELECT id from users_info WHERE username=?");
    $prepared_check_username->bind_param("s", $username);

    function uploadImage() {
        global $username;
        if (!mkdir('../users/'.$username)) {
            echo ('Failed to create directory '.'../users/'.$username);
        }
        else {
            if (!file_exists($_FILES['pfp']['tmp_name']) || !is_uploaded_file($_FILES['php']['tmp_name'])) {
                return;
            }
            else {
                $info = pathinfo($_FILES['pfp']['name']);
                $ext = $info['extension'];
                $newname = "pfp.".$ext;
                $target = '../users/'.$username.'/'.$newname;
                if (!move_uploaded_file($_FILES['pfp']['tmp_name'], $target)) {
                    echo 'Failed to upload '.$_FILES['pfp']['tmp_name'].' to '.$target;
                }
            }
        }
    }

    function valid_signup() {
        if (isset($_POST['given-name'])) {
            global $prepared_fle, $prepared_pwd, $prepared_check_email, $prepared_check_username, $given_name, $family_name, $email, $username, $password;
            $given_name = $_POST['given-name'];
            $family_name = $_POST['family-name'];
            $email = $_POST['email'];
            $prepared_check_email->execute();
            $result = $prepared_check_email->get_result();
            if ($result->num_rows != 0) {
                return 'An account already exists for that email.';
            }
            $username = $_POST['username'];
            $prepared_check_username->execute();
            $result = $prepared_check_username->get_result();
            if ($result->num_rows != 0) {
                return 'An account already exists for that username. Try a different one?';
            }
            else {
                uploadImage();
                $password = $_POST['password'];
                $password = password_hash($password, PASSWORD_BCRYPT);
                $prepared_fle->execute();
                $prepared_pwd->execute();
                return 'none';
            }
        }
        return 'The form did not submit correctly.';
    }
    $error = valid_signup();
    if ($error == 'none') {
        header('Location: ../sign-up/success.html'); 
    }
    else {
        header('Location: error.php?type=signup&error='.urlencode($error)); 
    }

    $conn->close();
?>