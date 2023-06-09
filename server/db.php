<?php

class CommonDao{
  
public static function getResult($quary){

  try{
    $servername = "localhost";
    $username = "root";
    $password = "1234";
    $database = "myharvest"; 

    $dbconn = new mysqli($servername, $username, $password, $database);
     
    if (!$dbconn) {
      die("Connection failed: ".$dbconn->connect_error);
    }

    $result = $dbconn->query($quary);

  } catch(PDOException $e) {
    $result= $quary . "<br>" . $e->getMessage();
  }
    return $result;

    $dbconn->close();
  }

}

  // class CommonDao{
    
  //   public static function getResult($query){

  //     $servername = "localhost";
  //     $username = "root";
  //     $password = "1234";
  //     $database = "earth1";
  //     // Create connection
  //     $dbconn = new mysqli($servername, $username, $password, $database);
      
  //     // Check connection
  //     if (!$dbconn) {
  //       die("Connection failed: " . $dbconn->connect_error);
  //     }

  //     $result = $dbconn->query($query);
  //     return $result;

  //   }

  //   public static function executeQuery($query){

  //     $servername = "localhost";
  //     $username = "root";
  //     $password = "1234";
  //     $database = "earth1";

  //     $dbconn = new mysqli($servername, $username, $password, $database);
      
  //     if (!$dbconn) {
  //       die("Connection failed: " . $dbconn->connect_error);
  //     }

  //     $result = $dbconn->query($query);
  //     return $result;
  //   }

  // }

?>