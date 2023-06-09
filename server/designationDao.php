<?php

include_once("db.php");
include_once("designation.php");

class DesignationDao{

    public static function getById($id){

        $designation = new Designation();
        $quary = "SELECT * FROM designation WHERE id =".$id;
        $result = CommonDao::getResult($quary);
        $row = $result->fetch_array();

        $designation->setId($row['id']);
        $designation->setName($row["name"]);
        return $designation;

    }

    public static function getAll(){

        $designations = array();
        
        $quary = "SELECT * FROM designation";
        $result= CommonDao::getResult($quary);
        
        while($row = $result->fetch_array())
        {
            $designation = new Designation();
            $designation->setId($row['id']);
            $designation->setName($row["name"]);
            array_push($designations,$designation);
        }

        return $designations;

    }

}

?>