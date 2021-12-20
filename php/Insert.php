<?php
include_once 'Connection.php';
global $conn;
    
$insert1 = $_POST['insert1'];
$insert2 = $_POST['insert2'];
$insert3 = $_POST['insert3'];
$insert4 = $_POST['insert4'];
 
$myData="
INSERT INTO players (nome,cidade)
VALUES('$insert1','$insert2','$insert3','$insert4) ";
    $record = odbc_exec($conn, $myData);

echo json_encode($record); 
    odbc_close($conn);
?>