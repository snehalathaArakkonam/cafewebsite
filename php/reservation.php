<?php
// Reservation Handler
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $guests = $_POST['guests'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $message = $_POST['message'];

    // In a real app, you'd save to DB or send email
    echo "<h1>Reservation Confirmed!</h1>";
    echo "<p>Thank you, $name. We have received your reservation for $guests guests on $date at $time.</p>";
    echo "<a href='../index.html'>Back to Home</a>";
}
?>
