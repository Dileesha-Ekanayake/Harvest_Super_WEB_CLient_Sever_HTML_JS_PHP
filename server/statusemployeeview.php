<?php

include_once("statusemployeeDao.php");

    $statusemployees = StatusemployeeDao::getAll();
    $json = json_encode($statusemployees);
    echo($json);


?>