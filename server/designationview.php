<?php

include_once("designationDao.php");

    $designations = DesignationDao::getAll();
    $json = json_encode($designations);
    echo($json);


?>