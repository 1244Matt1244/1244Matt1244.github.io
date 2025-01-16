<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Here, you can implement email sending logic or store data into a database
    echo "Message received. Thank you, $name!";
} else {
    echo "Invalid request!";
}
?>
