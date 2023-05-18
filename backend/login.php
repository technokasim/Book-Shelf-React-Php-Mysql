<?php

require 'db.php';

$conn = new mysqli($servername, $username, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $Username = $_POST['Username'];
    $Password = $_POST['Password'];

    $sql = "SELECT * FROM users WHERE username = '$Username' AND password = '$Password'";

    // Execute the query
    $result = mysqli_query($conn, $sql);

    // Check if a row was returned
    if (mysqli_num_rows($result) > 0) {
        // Username and password are correct
        echo "success";
    } else {
        // Username and/or password are incorrect
        echo "Invalid username or password.";
    }

    
    $conn->close();
}

?>