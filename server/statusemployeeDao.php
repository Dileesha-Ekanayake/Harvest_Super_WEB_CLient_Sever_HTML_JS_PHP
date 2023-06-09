<?php

include_once("db.php");
include_once("statusemployee.php");

class StatusemployeeDao{

    public static function getById($id){

        $statusemployee = new Statusemployee();
        $quary = "SELECT * FROM statusemployee WHERE id =".$id;
        $result = CommonDao::getResult($quary);
        $row = $result->fetch_array();

        $statusemployee->setId($row['id']);
        $statusemployee->setName($row["name"]);
        return $statusemployee;

    }

    public static function getAll(){

        $statusemployees = array();
        
        $quary = "SELECT * FROM statusemployee";
        $result= CommonDao::getResult($quary);
        
        while($row = $result->fetch_array())
        {
            $statusemployee = new Statusemployee();
            $statusemployee->setId($row['id']);
            $statusemployee->setName($row["name"]);
            array_push($statusemployees,$statusemployee);
        }

        return $statusemployees;

    }

}

?>