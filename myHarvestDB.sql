CREATE DATABASE  IF NOT EXISTS `myharvest` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `myharvest`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: myharvest
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designation`
--

DROP TABLE IF EXISTS `designation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `designation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designation`
--

LOCK TABLES `designation` WRITE;
/*!40000 ALTER TABLE `designation` DISABLE KEYS */;
INSERT INTO `designation` VALUES (1,'Manager'),(2,'Cashier'),(3,'Store Keeper'),(4,'Support');
/*!40000 ALTER TABLE `designation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender_id` int NOT NULL,
  `nic` char(12) DEFAULT NULL,
  `mobile` char(10) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `designation_id` int NOT NULL,
  `statusemployee_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_employee_gender_idx` (`gender_id`),
  KEY `fk_employee_designation1_idx` (`designation_id`),
  KEY `fk_employee_statusemployee1_idx` (`statusemployee_id`),
  CONSTRAINT `fk_employee_designation1` FOREIGN KEY (`designation_id`) REFERENCES `designation` (`id`),
  CONSTRAINT `fk_employee_gender` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`),
  CONSTRAINT `fk_employee_statusemployee1` FOREIGN KEY (`statusemployee_id`) REFERENCES `statusemployee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Nipu','1998-07-19',2,'987010185V','0776655456','nipu@gmail.com',1,2),(2,'Bodhini','2002-06-27',2,'200267903080','0765645434','bodhini@gmail.com',1,2),(3,'Gayan','1999-06-27',1,'996756456V','0765645345','gayan@gmail.com',2,2),(4,'Oshani','2000-10-14',2,'200078801687','0773352676','oshani@gmail.com',1,2),(5,'Samadhi','2000-02-26',2,'200078678578','0767554652','samadhi@gmail.com',1,2),(6,'Sunimal','1997-07-24',1,'975675454V','0756263665','suni@gmail.com',2,1),(7,'Nimsara','2002-06-27',2,'200201567876','0765645345','nimsara@gmail.com',1,2),(9,'Yuki','1999-04-22',2,'996562532V','0784563156','yuki@gmail.com',1,2),(10,'Namal','1982-11-12',1,'824556566V','0778598789','namal@gmail.com',3,2),(11,'Dileesha','2000-03-24',1,'200008402775','0768348418','dileesha@gmail.com',1,2),(13,'Janitha','1976-08-22',1,'764535362V','0776563243','janith@gmail.com',2,4),(15,'Tharindu','2000-12-07',1,'956734438V','0743261766','thari@gmail.com',2,3),(16,'Madhura','1999-12-15',1,'996378257V','0775462365','madhura@gmail.com',1,1),(18,'Sahan','1999-08-27',1,'208761236V','0768723578','sahan@gmail.com',1,2),(19,'Ashan','2001-08-24',1,'217832656V','0774323677','ashan@gmail.com',1,2),(20,'Vishwani','1998-11-30',2,'986732356V','0747657213','vish@gmail.com',2,3),(21,'Rashmi','2001-01-04',2,'206754373V','0766554328','rash@gmail.com',4,1),(22,'Amasha','1999-05-19',2,'997632467V','0712367543','ama@gmail.com',2,2),(23,'Uththra','2000-01-07',2,'207647632V','0758724387','uththra@gmail.com',2,3),(24,'Sandeepa','2000-04-01',1,'207864379V','0748732632','sandee@gmail.com',1,2),(25,'Esal','1996-05-30',1,'996546365V','0746723584','esala@gmail.com',4,4),(26,'Pulasthi','1999-06-22',1,'991234567V','0775644534','pula@gmail.com',1,2),(55,'Kalana','2000-03-09',1,'200007502776','0776756782','kalana@gmail.com',1,2),(57,'Indeera','1997-06-15',1,'975345165V','0776655454','indee@gmail.com',1,2),(63,'Kavindu','2000-02-02',1,'200007653645','0765564265','kavindu@gmail.comn',1,1),(64,'Rukshan','2000-05-05',1,'200006436526','0787656456','rukshan@gmail.com',4,2),(112,'Sumudri','2000-07-19',2,'200000000088','0755554444','samu@gmail.com',4,1),(114,'Mandahasi','2000-08-01',2,'200071403880','0768249419','malshya@gmail.com',1,5),(115,'Imran','2000-05-23',1,'200014402207','0750116294','imran@gmail.com',1,2);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Male'),(2,'Female'),(3,'Other');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int NOT NULL,
  `subcategory_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `code` char(6) DEFAULT NULL,
  `pricepurchase` decimal(7,2) DEFAULT NULL,
  `pricesale` decimal(7,2) DEFAULT NULL,
  `qoh` int DEFAULT NULL,
  `rop` int DEFAULT NULL,
  `statusitem_id` int NOT NULL,
  `dointroduced` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_item_brand1_idx` (`brand_id`),
  KEY `fk_item_statusitem1_idx` (`statusitem_id`),
  KEY `fk_item_subcategory1_idx` (`subcategory_id`),
  CONSTRAINT `fk_item_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `fk_item_statusitem1` FOREIGN KEY (`statusitem_id`) REFERENCES `statusitem` (`id`),
  CONSTRAINT `fk_item_subcategory1` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statusemployee`
--

DROP TABLE IF EXISTS `statusemployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statusemployee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statusemployee`
--

LOCK TABLES `statusemployee` WRITE;
/*!40000 ALTER TABLE `statusemployee` DISABLE KEYS */;
INSERT INTO `statusemployee` VALUES (1,'Unassigned'),(2,'Assigned'),(3,'Suspended'),(4,'Retired'),(5,'Resignated');
/*!40000 ALTER TABLE `statusemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statusitem`
--

DROP TABLE IF EXISTS `statusitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statusitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statusitem`
--

LOCK TABLES `statusitem` WRITE;
/*!40000 ALTER TABLE `statusitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `statusitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-06 17:52:46
