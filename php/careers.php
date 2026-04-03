<?php
// Careers Application Handler
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $position = $_POST['position'];
    
    // Handle file upload (simplified)
    if (isset($_FILES['resume'])) {
        $file_name = $_FILES['resume']['name'];
        $file_tmp = $_FILES['resume']['tmp_name'];
        // move_uploaded_file($file_tmp, "uploads/".$file_name);
    }

    echo "<h1>Application Submitted!</h1>";
    echo "<p>Thank you, $name. Your application for the $position position has been received.</p>";
    echo "<a href='../index.html'>Back to Home</a>";
}
?>
