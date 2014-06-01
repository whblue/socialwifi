CREATE DATABASE  IF NOT EXISTS `socialwifi` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `socialwifi`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: socialwifi
-- ------------------------------------------------------
-- Server version	5.5.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `permission_id_refs_id_6ba0f519` (`permission_id`),
  CONSTRAINT `group_id_refs_id_f4b32aac` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `permission_id_refs_id_6ba0f519` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  CONSTRAINT `content_type_id_refs_id_d043b34a` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(28,'Can add person',10,'add_person'),(29,'Can change person',10,'change_person'),(30,'Can delete person',10,'delete_person'),(31,'Can add r user friend',11,'add_ruserfriend'),(32,'Can change r user friend',11,'change_ruserfriend'),(33,'Can delete r user friend',11,'delete_ruserfriend'),(34,'Can add tb answer',12,'add_tbanswer'),(35,'Can change tb answer',12,'change_tbanswer'),(36,'Can delete tb answer',12,'delete_tbanswer'),(37,'Can add tb comment',13,'add_tbcomment'),(38,'Can change tb comment',13,'change_tbcomment'),(39,'Can delete tb comment',13,'delete_tbcomment'),(40,'Can add tb fee',14,'add_tbfee'),(41,'Can change tb fee',14,'change_tbfee'),(42,'Can delete tb fee',14,'delete_tbfee'),(43,'Can add tb flow',15,'add_tbflow'),(44,'Can change tb flow',15,'change_tbflow'),(45,'Can delete tb flow',15,'delete_tbflow'),(46,'Can add tb route',16,'add_tbroute'),(47,'Can change tb route',16,'change_tbroute'),(48,'Can delete tb route',16,'delete_tbroute'),(49,'Can add tb user',17,'add_tbuser'),(50,'Can change tb user',17,'change_tbuser'),(51,'Can delete tb user',17,'delete_tbuser'),(52,'Can add tb userinfo',18,'add_tbuserinfo'),(53,'Can change tb userinfo',18,'change_tbuserinfo'),(54,'Can delete tb userinfo',18,'delete_tbuserinfo'),(55,'Can add tb account',19,'add_tbaccount'),(56,'Can change tb account',19,'change_tbaccount'),(57,'Can delete tb account',19,'delete_tbaccount'),(58,'Can add r user friend',20,'add_ruserfriend'),(59,'Can change r user friend',20,'change_ruserfriend'),(60,'Can delete r user friend',20,'delete_ruserfriend'),(61,'Can add tb answer',21,'add_tbanswer'),(62,'Can change tb answer',21,'change_tbanswer'),(63,'Can delete tb answer',21,'delete_tbanswer'),(64,'Can add tb comment',22,'add_tbcomment'),(65,'Can change tb comment',22,'change_tbcomment'),(66,'Can delete tb comment',22,'delete_tbcomment'),(67,'Can add tb fee',23,'add_tbfee'),(68,'Can change tb fee',23,'change_tbfee'),(69,'Can delete tb fee',23,'delete_tbfee'),(70,'Can add tb flow',24,'add_tbflow'),(71,'Can change tb flow',24,'change_tbflow'),(72,'Can delete tb flow',24,'delete_tbflow'),(73,'Can add tb route',25,'add_tbroute'),(74,'Can change tb route',25,'change_tbroute'),(75,'Can delete tb route',25,'delete_tbroute'),(76,'Can add tb user',26,'add_tbuser'),(77,'Can change tb user',26,'change_tbuser'),(78,'Can delete tb user',26,'delete_tbuser'),(79,'Can add tb userinfo',27,'add_tbuserinfo'),(80,'Can change tb userinfo',27,'change_tbuserinfo'),(81,'Can delete tb userinfo',27,'delete_tbuserinfo'),(82,'Can add tb account',28,'add_tbaccount'),(83,'Can change tb account',28,'change_tbaccount'),(84,'Can delete tb account',28,'delete_tbaccount'),(85,'Can add auth group',29,'add_authgroup'),(86,'Can change auth group',29,'change_authgroup'),(87,'Can delete auth group',29,'delete_authgroup'),(88,'Can add auth group permissions',30,'add_authgrouppermissions'),(89,'Can change auth group permissions',30,'change_authgrouppermissions'),(90,'Can delete auth group permissions',30,'delete_authgrouppermissions'),(91,'Can add auth permission',31,'add_authpermission'),(92,'Can change auth permission',31,'change_authpermission'),(93,'Can delete auth permission',31,'delete_authpermission'),(94,'Can add auth user',32,'add_authuser'),(95,'Can change auth user',32,'change_authuser'),(96,'Can delete auth user',32,'delete_authuser'),(97,'Can add auth user groups',33,'add_authusergroups'),(98,'Can change auth user groups',33,'change_authusergroups'),(99,'Can delete auth user groups',33,'delete_authusergroups'),(100,'Can add auth user user permissions',34,'add_authuseruserpermissions'),(101,'Can change auth user user permissions',34,'change_authuseruserpermissions'),(102,'Can delete auth user user permissions',34,'delete_authuseruserpermissions'),(103,'Can add comment user',35,'add_commentuser'),(104,'Can change comment user',35,'change_commentuser'),(105,'Can delete comment user',35,'delete_commentuser'),(106,'Can add django admin log',36,'add_djangoadminlog'),(107,'Can change django admin log',36,'change_djangoadminlog'),(108,'Can delete django admin log',36,'delete_djangoadminlog'),(109,'Can add django content type',37,'add_djangocontenttype'),(110,'Can change django content type',37,'change_djangocontenttype'),(111,'Can delete django content type',37,'delete_djangocontenttype'),(112,'Can add django session',38,'add_djangosession'),(113,'Can change django session',38,'change_djangosession'),(114,'Can delete django session',38,'delete_djangosession'),(115,'Can add friend comment',39,'add_friendcomment'),(116,'Can change friend comment',39,'change_friendcomment'),(117,'Can delete friend comment',39,'delete_friendcomment'),(118,'Can add socialwifi person',40,'add_socialwifiperson'),(119,'Can change socialwifi person',40,'change_socialwifiperson'),(120,'Can delete socialwifi person',40,'delete_socialwifiperson');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(75) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `group_id_refs_id_274b862c` (`group_id`),
  CONSTRAINT `group_id_refs_id_274b862c` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `user_id_refs_id_40c41112` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `permission_id_refs_id_35d9ac25` (`permission_id`),
  CONSTRAINT `permission_id_refs_id_35d9ac25` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `user_id_refs_id_4dc23c39` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `comment_user`
--

DROP TABLE IF EXISTS `comment_user`;
/*!50001 DROP VIEW IF EXISTS `comment_user`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `comment_user` (
  `name` tinyint NOT NULL,
  `comment` tinyint NOT NULL,
  `userid` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_refs_id_c0d12874` (`user_id`),
  KEY `content_type_id_refs_id_93d2d1f8` (`content_type_id`),
  CONSTRAINT `content_type_id_refs_id_93d2d1f8` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `user_id_refs_id_c0d12874` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_label` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'log entry','admin','logentry'),(2,'permission','auth','permission'),(3,'group','auth','group'),(4,'user','auth','user'),(5,'content type','contenttypes','contenttype'),(6,'session','sessions','session'),(10,'person','socialwifi','person'),(11,'r user friend','socialwifi','ruserfriend'),(12,'tb answer','socialwifi','tbanswer'),(13,'tb comment','socialwifi','tbcomment'),(14,'tb fee','socialwifi','tbfee'),(15,'tb flow','socialwifi','tbflow'),(16,'tb route','socialwifi','tbroute'),(17,'tb user','socialwifi','tbuser'),(18,'tb userinfo','socialwifi','tbuserinfo'),(19,'tb account','socialwifi','tbaccount'),(20,'r user friend','core','ruserfriend'),(21,'tb answer','core','tbanswer'),(22,'tb comment','core','tbcomment'),(23,'tb fee','core','tbfee'),(24,'tb flow','core','tbflow'),(25,'tb route','core','tbroute'),(26,'tb user','core','tbuser'),(27,'tb userinfo','core','tbuserinfo'),(28,'tb account','core','tbaccount'),(29,'auth group','core','authgroup'),(30,'auth group permissions','core','authgrouppermissions'),(31,'auth permission','core','authpermission'),(32,'auth user','core','authuser'),(33,'auth user groups','core','authusergroups'),(34,'auth user user permissions','core','authuseruserpermissions'),(35,'comment user','core','commentuser'),(36,'django admin log','core','djangoadminlog'),(37,'django content type','core','djangocontenttype'),(38,'django session','core','djangosession'),(39,'friend comment','core','friendcomment'),(40,'socialwifi person','core','socialwifiperson');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `friend_comment`
--

DROP TABLE IF EXISTS `friend_comment`;
/*!50001 DROP VIEW IF EXISTS `friend_comment`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `friend_comment` (
  `answerid` tinyint NOT NULL,
  `commentid` tinyint NOT NULL,
  `replyanswerid` tinyint NOT NULL,
  `userid` tinyint NOT NULL,
  `username` tinyint NOT NULL,
  `content` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `r_user_friend`
--

DROP TABLE IF EXISTS `r_user_friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_user_friend` (
  `userid` int(11) DEFAULT NULL,
  `friendid` int(11) DEFAULT NULL,
  `authorityname` varchar(45) DEFAULT NULL,
  `availableflow` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `friendname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_friend_idx` (`friendid`),
  KEY `userid_me_idx` (`userid`),
  CONSTRAINT `friendid` FOREIGN KEY (`friendid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_user_friend`
--

LOCK TABLES `r_user_friend` WRITE;
/*!40000 ALTER TABLE `r_user_friend` DISABLE KEYS */;
INSERT INTO `r_user_friend` VALUES (0,0,'best',100,0,'lily'),(0,1,'best',100,1,'lucy'),(0,2,'common',30,2,'david'),(0,3,'common',20,3,'coco');
/*!40000 ALTER TABLE `r_user_friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `socialwifi_person`
--

DROP TABLE IF EXISTS `socialwifi_person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `socialwifi_person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `shirt_size` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socialwifi_person`
--

LOCK TABLES `socialwifi_person` WRITE;
/*!40000 ALTER TABLE `socialwifi_person` DISABLE KEYS */;
INSERT INTO `socialwifi_person` VALUES (1,'lily','L'),(2,'lucy','M'),(3,'aaa','l'),(4,'aaa','l'),(5,'aaa','l'),(6,'aaa','l'),(7,'aaa','S'),(8,'aaa','S'),(9,'aaa','M'),(10,'aaa','M'),(11,'aaa','M'),(12,'aaa','M'),(13,'aaa','M'),(14,'aaa','M'),(15,'aaa','M'),(16,'aaa','M'),(17,'aaa','X'),(18,'aaa','X'),(19,'aaa','X'),(20,'aaa','X'),(21,'aaa','X'),(22,'aaa','X'),(23,'aaa','X'),(24,'aaa','X'),(25,'aaa','X'),(26,'aaa','X');
/*!40000 ALTER TABLE `socialwifi_person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_account`
--

DROP TABLE IF EXISTS `tb_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_account` (
  `userid` int(11) DEFAULT NULL,
  `jieyuflow` int(11) DEFAULT NULL,
  `userdflow` int(11) DEFAULT NULL,
  `lastmonthflow` int(11) DEFAULT NULL,
  `getflow` int(11) DEFAULT NULL,
  `month` date DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_account` (`userid`),
  CONSTRAINT `userid_account` FOREIGN KEY (`userid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_account`
--

LOCK TABLES `tb_account` WRITE;
/*!40000 ALTER TABLE `tb_account` DISABLE KEYS */;
INSERT INTO `tb_account` VALUES (0,10,5,20,10,'2014-03-14',0),(0,12,12,12,22,'2014-03-13',1);
/*!40000 ALTER TABLE `tb_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_answer`
--

DROP TABLE IF EXISTS `tb_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_answer` (
  `answerid` int(11) NOT NULL AUTO_INCREMENT,
  `commentid` int(11) DEFAULT NULL,
  `replyanswerid` int(11) DEFAULT NULL,
  `content` varchar(200) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`answerid`),
  KEY `commentid_idx` (`commentid`),
  KEY `userid_answer_idx` (`userid`),
  KEY `replyanswerid_idx` (`replyanswerid`),
  CONSTRAINT `commentid` FOREIGN KEY (`commentid`) REFERENCES `tb_comment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `replyanswerid` FOREIGN KEY (`replyanswerid`) REFERENCES `tb_answer` (`answerid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userid_answer` FOREIGN KEY (`userid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_answer`
--

LOCK TABLES `tb_answer` WRITE;
/*!40000 ALTER TABLE `tb_answer` DISABLE KEYS */;
INSERT INTO `tb_answer` VALUES (1,1,NULL,'hello',0,'2014-02-01 00:00:00','lily'),(3,2,NULL,'hi',1,'2014-03-01 00:00:00','lucy'),(4,3,NULL,'hi',2,'2014-03-02 00:00:00','david'),(6,1,1,'hi',2,'2014-03-10 00:00:00','david');
/*!40000 ALTER TABLE `tb_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_comment`
--

DROP TABLE IF EXISTS `tb_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(200) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_root_idx` (`userid`),
  CONSTRAINT `userid_comment` FOREIGN KEY (`userid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comment`
--

LOCK TABLES `tb_comment` WRITE;
/*!40000 ALTER TABLE `tb_comment` DISABLE KEYS */;
INSERT INTO `tb_comment` VALUES (1,'hello',0,'2014-02-01 00:00:00','lily'),(2,'hi',1,'2014-02-28 00:00:00','lucy'),(3,'good night',2,'2014-03-01 00:00:00','david'),(4,'hello',0,'2014-03-10 00:00:00','lily'),(5,'hello',0,'2014-03-10 00:00:00','lily'),(6,'hello',0,'2014-03-10 00:00:00','lily'),(14,NULL,NULL,NULL,NULL),(15,NULL,NULL,NULL,NULL),(16,NULL,NULL,NULL,NULL),(17,'hi',1,'2014-03-10 00:00:00','lucy'),(18,'safsadfsad',0,'2014-03-13 23:59:00','Annie'),(19,'arfasf',0,'2014-03-14 00:04:00','Annie'),(20,'sfasfas',0,'2014-03-14 00:05:00','Annie'),(21,'afadfa',0,'2014-03-14 00:44:00','Annie'),(22,'good',0,'2014-03-14 01:38:00','Annie'),(23,'afdsafdsa',0,'2014-03-14 08:45:00','Annie'),(24,'dsdtdyt',0,'2014-04-11 13:18:00','Annie'),(25,'',0,'2014-05-15 23:39:00','Annie'),(26,'',0,'2014-05-16 00:03:00','Annie');
/*!40000 ALTER TABLE `tb_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_fee`
--

DROP TABLE IF EXISTS `tb_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_fee` (
  `id` int(11) NOT NULL,
  `authorityname` varchar(45) DEFAULT NULL,
  `payflow` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_fee`
--

LOCK TABLES `tb_fee` WRITE;
/*!40000 ALTER TABLE `tb_fee` DISABLE KEYS */;
INSERT INTO `tb_fee` VALUES (0,'bestfriend',10),(1,'family',0),(2,'common',20);
/*!40000 ALTER TABLE `tb_fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_flow`
--

DROP TABLE IF EXISTS `tb_flow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_flow` (
  `id` int(11) NOT NULL,
  `routerid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `stop_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `routerid_idx` (`routerid`),
  KEY `userid_idx` (`userid`),
  KEY `userid_idx1` (`userid`),
  KEY `routerid_idx1` (`routerid`),
  CONSTRAINT `routerid_flow` FOREIGN KEY (`routerid`) REFERENCES `tb_route` (`routerid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userid_flow` FOREIGN KEY (`userid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_flow`
--

LOCK TABLES `tb_flow` WRITE;
/*!40000 ALTER TABLE `tb_flow` DISABLE KEYS */;
INSERT INTO `tb_flow` VALUES (0,0,0,'2014-03-02 00:00:00','2014-03-02 00:10:00'),(1,1,1,'2014-03-03 00:00:00','2013-03-02 11:00:00');
/*!40000 ALTER TABLE `tb_flow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_route`
--

DROP TABLE IF EXISTS `tb_route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_route` (
  `routerid` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `flow` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  PRIMARY KEY (`routerid`),
  KEY `owner_idx` (`owner`),
  CONSTRAINT `owner` FOREIGN KEY (`owner`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_route`
--

LOCK TABLES `tb_route` WRITE;
/*!40000 ALTER TABLE `tb_route` DISABLE KEYS */;
INSERT INTO `tb_route` VALUES (0,'cmcc',200,0,31.3,120),(1,'chinaunion',500,1,30,118);
/*!40000 ALTER TABLE `tb_route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_user` (
  `password` varchar(45) DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES ('000000',0,'Annie'),('111111',1,'Lily'),('222222',2,'Lucy'),('333333',3,'Ivy');
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userinfo`
--

DROP TABLE IF EXISTS `tb_userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_userinfo` (
  `userid` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `picture` binary(1) DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  CONSTRAINT `useridinfo` FOREIGN KEY (`userid`) REFERENCES `tb_user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userinfo`
--

LOCK TABLES `tb_userinfo` WRITE;
/*!40000 ALTER TABLE `tb_userinfo` DISABLE KEYS */;
INSERT INTO `tb_userinfo` VALUES (0,'lily','music','1991-02-01','shanghai',NULL,0),(1,'lucy','football','1990-02-02','nanjing',NULL,1),(2,'david','ktv','1991-01-02','suzhou',NULL,2),(3,'coco','music','1990-02-01','shanghai',NULL,3);
/*!40000 ALTER TABLE `tb_userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `comment_user`
--

/*!50001 DROP TABLE IF EXISTS `comment_user`*/;
/*!50001 DROP VIEW IF EXISTS `comment_user`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `comment_user` AS select `tb_userinfo`.`username` AS `name`,`tb_comment`.`comment` AS `comment`,`tb_comment`.`userid` AS `userid` from (`tb_userinfo` join `tb_comment`) where (`tb_userinfo`.`userid` = `tb_comment`.`userid`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `friend_comment`
--

/*!50001 DROP TABLE IF EXISTS `friend_comment`*/;
/*!50001 DROP VIEW IF EXISTS `friend_comment`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `friend_comment` AS select `tb_answer`.`answerid` AS `answerid`,`tb_answer`.`commentid` AS `commentid`,`tb_answer`.`replyanswerid` AS `replyanswerid`,`tb_answer`.`userid` AS `userid`,`tb_userinfo`.`username` AS `username`,`tb_answer`.`content` AS `content` from (`tb_answer` join `tb_userinfo`) where (`tb_answer`.`userid` = `tb_userinfo`.`userid`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-06-01  1:11:09
