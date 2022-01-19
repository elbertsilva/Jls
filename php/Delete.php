<?php
include_once 'Connection.php';
global $conn;
    
$rowId = $_POST['rowId'];
$delete1 = $_POST['delete1'];
$delete2 = $_POST['delete2'];
 
$myData="
delete players
where id = '$rowId' ";
    $record = odbc_exec($conn, $myData);

echo json_encode($record); 
    odbc_close($conn);
?>