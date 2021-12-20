<?php
$user = 'test';
$pass = 'test';
$server = 'BRCFLAP020';
$database = 'JlsSport';
$port='Port=1433';

$connection_string = "DRIVER={ODBC Driver 17 for SQL Server};SERVER=$server;$port;DATABASE=$database";
$conn = odbc_connect($connection_string,$user,$pass);

// $query = 'SELECT * FROM [JlsSport].[dbo].[players]';

// $record = odbc_exec($conn, $query);
// $i=0;
// while (odbc_fetch_row($record)){

		// $val1 = odbc_result($record, "nome");
		// $val2 = odbc_result($record, "cidade");

		// $data[$i]= array(
			// $val1,
			// $val2
			// );
			
		// $i=$i+1;
	// }

// echo json_encode($data);
// odbc_close($conn);
?>

