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
    $Description = $_POST['Description'];
    $Shelf_table = $_POST['Shelf_table'];
    $Added_by = $_POST['Added_by'];


    if (!($Added_by == 'null')) {
        $sql = "INSERT INTO books (`name`, `type`, `shelf_table`, `description`, `added_by`) VALUES ('$Name', '$Type', '$Shelf_table', '$Description', '$Added_by');";
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