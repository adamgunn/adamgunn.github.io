<?php
    
    function valid_signup() {
        if (isset($_POST['given-name'])) {
            $given_name = $_POST['given-name'];
            $family_name = $_POST['family-name'];
            $email = $_POST['email'];
            $message = $_POST['message'];
            $fp = fopen('email-list.txt', 'a');
            fwrite($fp, "first name: " . $given_name);
            fwrite($fp, "\n" . "last name: " . $family_name);
            fwrite($fp, "\n" . "email: " . $email);
            fwrite($fp, "\n" . "message: " . $message);
            fwrite($fp, "\n\n");
            fclose($fp);
            return TRUE;
        }
        return FALSE;
    }
    
    if (valid_signup()) {
        header('Location: ../sign-up/success.html'); 
    }

    // function alertSubmit() {
    //     echo "
    //         <script>
    //             alert('Submitted successfully! :D');
    //         </script>
    //     ";
    // }

    // if (isset($_REQUEST["destination"])) {
    //     header("Location: {$_REQUEST["destination"]}");
    //     alertSubmit();
    // }
    // else if (isset($_SERVER["HTTP_REFERER"])) {
    //     header("Location: {$_SERVER["HTTP_REFERER"]}");
    //     alertSubmit();
    // }
    // else {
    //     header("Location: http://adamgunn.net/sign-up");
    // }

?>