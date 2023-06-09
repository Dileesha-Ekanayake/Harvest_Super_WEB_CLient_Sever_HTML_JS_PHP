<?php

include_once("EmployeeDao.php");

$errors="";

if(!isset($_POST["employee"])){
    $errors="Employee Not Available";    
}
else{
    $employee = $_POST["employee"]; 
    $employee = json_decode($employee);

    // var_dump($employee);

    if(! ( isset($employee->name) && isset($employee->dob) && isset($employee->nic) && isset($employee->gender) && isset($employee->mobile) && isset($employee->email) && isset($employee->designation) && isset($employee->statusemployee) )) 
    { $errors="Employee Content Not Available"; }  
    else{
        if(!preg_match("/^[A-Z][a-z]*$/", $employee->name)) $errors = $errors . "Name Invalid<br/>";
        if(!preg_match("/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/", $employee->nic)) $errors = $errors . "NIC Invalid<br/>";
        if(!preg_match("/^0[0-9]{9}$/", $employee->mobile)) $errors = $errors . "Mobile Invalid<br/>";
        if(!preg_match("/^[a-z]*@[a-z]*.[a-z]*$/", $employee->email)) $errors = $errors . "Email Invalid<br/>";
        if($employee->dob==0) $errors = $errors . "DOB Invalid<br/>";     
        if($employee->gender==null) $errors = $errors . "Gender Not Selected<br/>";     
        if($employee->designation==null) $errors = $errors . "Designation Not Selected<br/>";     
        if($employee->statusemployee==null) $errors = $errors . "Status Not Selected<br/>";     
        
    }
    // && isset($employee->dob) && isset($employee->mobile) && isset($employee->email) && isset($employee->designation) && isset($employee->statusemployee) && 
}

    if($errors!="") echo($errors);
        else{ 

            $emp = EmployeeDao::getByNic($employee->nic);

            if($emp != null && $emp->id != $employee->id){
                 $errors = $errors."Nic Exsisted";
                 echo $errors;
            } 
            else{ 
                    $result = EmployeeDao::update($employee);
                        if($result == 0 ) $result = "Database Error<br/>";
                            echo($result);
            }
        }
            
?>
