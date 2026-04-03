<?php
// Contact Form Handler
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    echo "<h1>Message Sent!</h1>";
    echo "<p>Thank you, $name. We will get back to you shortly at $email.</p>";
    echo "<a href='../index.html'>Back to Home</a>";
}
?>
