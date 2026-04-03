<?php
// Newsletter Handler
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    echo "<h1>Subscribed!</h1>";
    echo "<p>Thank you for joining our newsletter. We'll keep you updated at $email.</p>";
    echo "<a href='../index.html'>Back to Home</a>";
}
?>
