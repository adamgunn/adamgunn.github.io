<?php
    if (isset($_POST['given-name'])) {
        $given_name = $_POST['given-name'];
        $family_name = $_POST['family-name'];
        $email = $_POST['email'];
        $fp = fopen('email-list.txt', 'a');
        fwrite($fp, "first name: ");
        fwrite($fp, $given_name);
        fwrite($fp, "\n" . "last name: ");
        fwrite($fp, $family_name);
        fwrite($fp, "\n" . "email: ");
        fwrite($fp, $email);
        fclose($fp);
    }
    if (isset($_POST['message'])) {
        $message = $_POST['message'];
        $fp = fopen('email-list.txt', 'a');
        fwrite($fp, "\n" . "message: ");
        fwrite($fp, $message);
        fwrite($fp, "\n" . "\n");
        fclose($fp);
    }
    else {
        $fp = fopen('email_list.txt', 'a');
        fwrite($fp, "\n" . "message: NONE");
        fwrite($fp, "\n" . "\n");
        fclose($fp);
    }

    function alertSubmit() {
        echo "
            <script>
                alert('Submitted successfully! :D');
            </script>
        ";
    }

    if (isset($_REQUEST["destination"])) {
        header("Location: {$_REQUEST["destination"]}");
        alertSubmit();
    }
    else if (isset($_SERVER["HTTP_REFERER"])) {
        header("Location: {$_SERVER["HTTP_REFERER"]}");
        alertSubmit();
    }
    else {
        header("Location: http://adamgunn.net/sign-up");
    }
?>