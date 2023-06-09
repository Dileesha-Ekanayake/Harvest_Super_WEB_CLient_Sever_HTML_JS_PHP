<?php

include_once("EmployeeDao.php");

$errors="";

if(!isset($_POST["employee"])){
    $errors="Employee Not Available";    
}
else{
    $employee = $_POST["employee"]; 
    $employee = json_decode($employee);
    if(! ( isset($employee->id))) { $errors="Employee Content Not Available"; }  


}

    if($errors!="") echo($errors);
        else{ 
            $result = EmployeeDao::delete($employee);
                if($result == 0 ) $result = "Database Error<br/>";
                    echo($result);
            }
        
            
?>
