<?php
include_once 'Connection.php';
global $conn;

$rowId = $_POST['rowId'];
$update1 = $_POST['update1'];
$update2 = $_POST['update2'];
$update3 = $_POST['update3'];
$update4 = $_POST['update4'];
 
$myData="
UPDATE players SET
nome = '$update1',
cidade = '$update2'
dataNascimento = '$update3'
posicao = '$update4'
where id = $rowId ";
    $record = odbc_exec($conn, $myData);

echo json_encode($myData); 
//echo json_encode($record); 
    odbc_close($conn);
?>