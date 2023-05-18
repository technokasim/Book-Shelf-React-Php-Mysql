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

    $sql = "SELECT * FROM users WHERE username = '$Username'";

    // Execute the query
    $result = mysqli_query($conn, $sql);
    // Check if any rows were returned
    if (mysqli_num_rows($result) > 0) {
    // Username already exists
    echo "Username already exists. Please choose a different username.";
    } else {
        $sql = "INSERT INTO users(username, password) VALUES ('$Username', '$Password' );";
        $res = mysqli_query($conn, $sql);
    
        if ($res) {
            echo "Success";
        }
        else {
            echo "error";
        }
    }

    
    $conn->close();
}

?>