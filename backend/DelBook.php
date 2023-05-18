<?php
require 'db.php';

$conn = new mysqli($servername, $username, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $id = $_POST['id'];
    $Added_by = $_POST['Added_by'];
    
    if (!($Added_by == 'null')) { 
    $sql = "DELETE FROM books where id='$id';";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success";
    }
    else {
        echo "Error!";
    }

   
}
else {
    echo 'UserError';
}
    $conn->close();

}

?>
