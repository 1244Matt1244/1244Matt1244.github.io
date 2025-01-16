<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data and sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address. Please provide a valid email.";
        exit;
    }

    // Set up the recipient email and subject
    $to = 'your_email@example.com';
    $subject = 'New Contact Form Submission';
    
    // Set email headers with additional security measures
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Construct the email body
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send the email using PHP's mail function
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>

<!-- HTML Form for the user to submit their message -->
<form method="POST" action="">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required><br>

    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required><br>

    <label for="message">Message:</label>
    <textarea name="message" id="message" required></textarea><br>

    <button type="submit">Send</button>
</form>
