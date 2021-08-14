<?php
    
    function valid_signup() {
        if (isset($_POST['given-name'])) {
            $given_name = $_POST['given-name'];
            $family_name = $_POST['family-name'];
            $email = $_POST['email'];
            $fp = fopen('email-list.txt', 'a');
            fwrite($fp, "first name: $given_name");
            fwrite($fp, "\r\nlast name: $family_name");
            fwrite($fp, "\r\nemail: $email");
            fclose($fp);
            return TRUE;
        }
        if (isset($_POST['message'])) {
            $fp = fopen('email-list.txt', 'a');
            $message = $_POST['message'];
            fwrite($fp, "\r\nmessage: $message");
            fwrite($fp, "\r\n\r\n");
            fclose($fp);
        }
        else {
            $fp = fopen('email-list.txt', 'a');
            fwrite($fp, "\r\n\r\n");
            fclose($fp);
        }
        return FALSE;
    }
    
    if (valid_signup()) {
        header('Location: ../sign-up/success.html'); 
    }
?>