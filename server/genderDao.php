<?php

include_once("db.php");
include_once("gender.php");

class GenderDao{

    public static function getById($id){

        $gender = new Gender();
        $quary = "SELECT * FROM gender WHERE id =".$id;
        $result = CommonDao::getResult($quary);
        $row = $result->fetch_array();

        $gender->setId($row['id']);
        $gender->setName($row["name"]);
        return $gender;

    }

    public static function getAll(){

        $genders = array();
        
        $quary = "SELECT * FROM gender";
        $result= CommonDao::getResult($quary);
        
        while($row = $result->fetch_array())
        {
            $gender = new Gender();
            $gender->setId($row['id']);
            $gender->setName($row["name"]);
            array_push($genders,$gender);
        }

        return $genders;

    }

}

?>