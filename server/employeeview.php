<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include_once("EmployeeDao.php");
include_once("employee.php");

    $hasname = !empty($_GET["name"]); 
    $hasgender = !empty($_GET["gender"]);  
    $hasdesignation = !empty($_GET["designation"]);  

    if($hasname) $name = $_GET["name"]; 

    if($hasgender) $gender = json_decode($_GET["gender"]);
    if($hasdesignation) $designation = json_decode($_GET["designation"]); 

    $employees = null;  
        
    if(!$hasname && !$hasgender && !$hasdesignation) $employees = EmployeeDao::getAll();
    if($hasname && !$hasgender && !$hasdesignation) $employees = EmployeeDao::getAllByName($name); 
    if(!$hasname && $hasgender && !$hasdesignation) $employees = EmployeeDao::getAllByGender($gender); 
    // if(!$hasname && !$hasgender && $hasdesignation) $employees = EmployeeDao::getAllByDesignation($designation); 
    if($hasname && $hasgender && !$hasdesignation) $employees = EmployeeDao::getAllByNameAndGender($name,$gender);
    // if($hasname && !$hasgender && $hasdesignation) $employees = EmployeeDao::getAllByNameAndDesignation($name,$designation); 
    // if(!$hasname && $hasgender && $hasdesignation) $employees = EmployeeDao::getAllByGenderAndDesignation($gender,$designation);  
    // if($hasname && $gender && $hasdesignation) $employees = EmployeeDao::getAllByNameAndGenderAndDesignation($name,$gender,$designation);
    $json =json_encode($employees);
    echo ($json);

?>