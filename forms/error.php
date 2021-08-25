<?php
    $type = $_GET['type'];
    $error = $_GET['error'];
?>
<!DOCTYPE html>
<html lang="en-us" dir="ltr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error | Adam Gunn</title>
        <meta name="description" content="The server encountered an error with the account system." />
        <link rel="icon" type="image/png" href="../images/favicon_16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="../images/favicon_32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="../images/favicon_96x96.png" sizes="96x96" />
        <link href="../main.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/uvg2mwq.css">
        <script src="../main.js"></script>
    </head>
    <body>
        <div class="header-container"></div>
        <h1 class="pageTitle">
            Error
        </h1>
        <p class="bodyText">
            <?php echo $error; ?>
        </p>
        <?php
            if ($type == "signup") {
                echo "
                <a href=\"../sign-up/index.html\" class=\"game_link\"><h2 class=\"subtitle\">
                    Try again
                </h2></a>
                ";
            } elseif ($type == "login") {
                echo "
                <a href=\"../log-in/index.html\" class=\"game_link\"><h2 class=\"subtitle\">
                    Try again
                </h2></a>
                ";
            } else {
                echo "
                <h2 class=\"subtitle\">
                    <a href=\"../sign-up/index.html\" class=\"game_link\">Sign up</a> | <a href=\"../log-in/index.html\" class=\"game_link\">Log in</a>
                </h2>
                ";
            }
        ?>
        <div class="contacts_container"></div>
    </body>
</html>