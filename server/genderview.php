<?php

include_once("genderDao.php");

    $genders = GenderDao::getAll();
    $json = json_encode($genders);
    echo($json);


?>