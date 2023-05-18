<?php

require 'db.php';

$conn = new mysqli($servername, $username, $password, $database);
$id="";
 
$method = $_SERVER['REQUEST_METHOD'];
 
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

 
switch ($method) {
    case 'GET':
      $sql = "select * from books;"; 
      break;
}
 
// run SQL statement
$result = mysqli_query($conn,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($conn);
  }
 
$conn->close();
?>
