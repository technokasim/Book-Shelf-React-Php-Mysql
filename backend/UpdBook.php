<?php
require 'db.php';

$conn = new mysqli($servername, $username, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $Name = $_POST['Name'];
    $Type = $_POST['Type'];
    $Shelf_table = $_POST['Shelf_table'];
    $Description = $_POST['Description'];
    $Added_by = $_POST['Added_by'];
    $id = $_POST['id'];


    if (!($Added_by == 'null')) {
        $sql = "UPDATE books SET name = '$Name', type = '$Type', shelf_table = '$Shelf_table', description = '$Description' WHERE id = $id";
        $res = mysqli_query($conn, $sql);

        if ($res) {
            echo "Success";
        }
        else {
            echo 'Error';
        }
    } else {
        echo 'UserError';
    }

    
    $conn->close();
}

?>