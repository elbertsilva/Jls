<?php
include_once 'Connection.php';
    global $conn;
    global $io;
    global $idofCol;
    global $nomeOfCol;
	global $cidadeOfCol;
    global $dataNascimentoOfCol;
    global $posicaoOfCol;
     $myData=" SELECT * FROM players; ";
    $record = odbc_exec($conn, $myData);
    $io=0;
    while (odbc_fetch_row($record))     
        {           
            $idofCol=odbc_result($record,"id");
            $nomeOfCol=odbc_result($record,"nome");
            $cidadeOfCol=odbc_result($record,"cidade");   
            $dataNacimentoOfCol=odbc_result($record,"dataNascimento");  
            $posicaoOfCol=odbc_result($record,"posicao");             
                $data[$io]= array(
                    $idofCol,
                    $nomeOfCol,
					$cidadeOfCol,
                    $dataNacimentoOfCol,
                    $posicaoOfCol
                                                 );
                    $io=$io+1;                  
        }
            echo json_encode($data);    
    odbc_close($conn);
?>
