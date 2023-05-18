<?php
require 'db.php';

$conn = new mysqli($servername, $username, $password, $database);


    $id = $_GET['id'];

    $Added_by = $_GET['user'];

    if (!($Added_by == 'null')) {   
                $sql = "SELECT * FROM books where id='$id';";
                $res = mysqli_query($conn, $sql);

                // Check if a row was returned
            if (mysqli_num_rows($res) > 0) {
                // Fetch the data
                $data = mysqli_fetch_assoc($res);

                // Return the data as JSON response
                header('Content-Type: application/json');
                echo json_encode($data);
            } else {
                // No data found with the provided ID
                header("HTTP/1.0 404 Not Found");
                echo "No data found.";
            }

} else {
    echo 'UserError';
}

    $conn->close();


?>
