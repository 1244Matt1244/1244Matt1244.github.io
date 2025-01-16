<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Your email address where you want to receive the message
    $to = "matt123.3a@gmail.com";
    
    // Subject of the email
    $subject = "New message from " . $name;
    
    // Body of the email
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    // Headers for the email
    $headers = "From: no-reply@yourdomain.com" . "\r\n" . "Reply-To: $email";
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
