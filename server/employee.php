<?php

class Employee {

    var $id;
    var $name;
    var $nic;
    var $dob;
    var $gender;
    var $mobile;
    var $email;
    var $designation;
    var $statusemployee;
    
    function __construct() {}

    // $dob =date_create("2013-03-15");
    
    function setId($id) {$this->id = $id;}
    function getId() {return $this->id;}
    
    function setName($name) {$this->name = $name;}
    function getName() {return $this->name;}

    function setNic($nic) {$this->nic = $nic;}
    function getNic() {return $this->nic;}

    function setDOB($dob) {$this->dob = $dob;}
    function getDOB() {return $this->dob;}

    function setMobile($mobile) {$this->mobile = $mobile;}
    function getMobile() {return $this->mobile;}

    function setEmail($email) {$this->email = $email;}
    function getEmail() {return $this->email;}

    function setGender($gender) {$this->gender = $gender;}
    function getGender() {return $this->gender;}

    function setDesignation($designation) {$this->designation = $designation;}
    function getDesignation() {return $this->designation;}

    function setStatusEmployee($statusemployee) {$this->statusemployee = $statusemployee;}
    function getStatusEmployee() {return $this->statusemployee;}

    }

?>

