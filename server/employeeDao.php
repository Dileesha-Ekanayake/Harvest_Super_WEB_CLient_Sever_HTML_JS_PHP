<?php

include_once("db.php");
include_once("employee.php");
include_once("GenderDao.php");
include_once("DesignationDao.php");
include_once("StatusEmployeeDao.php");


class EmployeeDao{

    public static function setData($row){

        $employee = new Employee();
        $employee->setId($row["id"]);
        $employee->setName($row["name"]);
        $employee->setDOB($row["dob"]);
        $employee->setNic($row["nic"]);
        $employee->setMobile($row["mobile"]);
        $employee->setEmail($row["email"]);
        $employee->setGender(GenderDao::getById(($row["gender_id"])));
        $employee->setDesignation(DesignationDao::getById(($row["designation_id"])));
        $employee->setStatusEmployee(StatusEmployeeDao::getById(($row["statusemployee_id"])));
    
        return $employee;
        var_dump($employee);

    }   

    public static function getById($id){

        $employee = null;
        $query = "select * from employee where id = ".$id;
        $result = CommonDao::getResult($query);
        if($row = $result->fetch_array()){
        $employee = EmployeeDao::setData($row);
        }
        return $employee;
    }

    public static function getAll(){
        $employees = array();

        $query = "select * from employee";
        $result = CommonDao::getResult($query);
        while ($row = $result->fetch_array()) {
           $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }

        return $employees;
    }
    

    public static function getAllByName($name){

        $employees = array();
        $query ="select * from employee where name like '".$name."%'";
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }

    public static function getByNic($nic){

        $employee = null;
        $query ="select * from employee where nic = '".$nic."'";
        $result = CommonDao::getResult($query);
        if($row = $result->fetch_array()){
            $employee = EmployeeDao::setData($row);
        }

        return $employee;
    }

    public static function getAllByGender($gender){

        $employees = array();
        $query ="select * from employee where gender_id =".$gender->id;
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }

    public static function getAllByDesignation($designation){

        $employees = array();
        $query ="select * from employee where designation_id =".$designation->id;
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }


    public static function getAllByNameAndGender($name,$gender){
 
        $employees = array();
        $query ="select * from employee where name like '".$name."%' and gender_id = ".$gender->id;
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }

    public static function getAllByNameAndDesignation($name,$designation){
 
        $employees = array();
        $query ="select * from employee where name like '".$name."%' and designation_id = ".$designation->id;
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }

    public static function getAllByGenderAndDesignation($gender,$designation){
 
        $employees = array();
        $query ="select * from employee where gender_id = ".$gender->id. "and designation_id=".$designation->id;
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }


    public static function getAllByNameAndGenderAndDesignation($name,$gender,$designation){
 
        $employees = array();
        $query ="select * from employee where name like '".$name."%' and gender_id = ".$gender->id. "and designation_id=".$designation->id;
        $result = CommonDao::getResult($query);

        while ($row = $result->fetch_array()) {
            $employee = EmployeeDao::setData($row);
            array_push($employees, $employee);
        }
        return $employees;
    }

    public static function insert($employee){

        $query = "Insert into employee(name,dob,gender_id,nic,mobile,email,designation_id,statusemployee_id) values ('".$employee->name."','".$employee->dob."','".$employee->gender->id."','".$employee->nic."','".$employee->mobile."','".$employee->email."','".$employee->designation->id."','".$employee->statusemployee->id."')";
        $result = CommonDao::getResult($query);

        return $result;
    }

    public static function update($employee){

        $query = "update employee  set name='".$employee->name."',nic='".$employee->nic."',dob='".$employee->dob."',email='".$employee->email."',mobile='".$employee->mobile."',gender_id=".$employee->gender->id.",designation_id=".$employee->designation->id.",statusemployee_id=".$employee->statusemployee->id." where id =".$employee->id;
        $result = CommonDao::getResult($query);

        return $result;
    }

    public static function delete($employee){

        $query = "DELETE FROM employee WHERE id=".$employee->id;
        $result = CommonDao::getResult($query);

        return $result;
    }

}

?>