CREATE DATABASE  IF NOT EXISTS `socialwifi` /*!40100 DEFAULT CHARACTER SET gbk */;
USE `socialwifi`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: socialwifi
-- ------------------------------------------------------
-- Server version	5.1.65-community

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
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(28,'Can add person',10,'add_person'),(29,'Can change person',10,'change_person'),(30,'Can delete person',10,'delete_person'),(31,'Can add r user friend',11,'add_ruserfriend'),(32,'Can change r user friend',11,'change_ruserfriend'),(33,'Can delete r user friend',11,'delete_ruserfriend'),(34,'Can add tb answer',12,'add_tbanswer'),(35,'Can change tb answer',12,'change_tbanswer'),(36,'Can delete tb answer',12,'delete_tbanswer'),(37,'Can add tb comment',13,'add_tbcomment'),(38,'Can change tb comment',13,'change_tbcomment'),(39,'Can delete tb comment',13,'delete_tbcomment'),(40,'Can add tb fee',14,'add_tbfee'),(41,'Can change tb fee',14,'change_tbfee'),(42,'Can delete tb fee',14,'delete_tbfee'),(43,'Can add tb flow',15,'add_tbflow'),(44,'Can change tb flow',15,'change_tbflow'),(45,'Can delete tb flow',15,'delete_tbflow'),(46,'Can add tb route',16,'add_tbroute'),(47,'Can change tb route',16,'change_tbroute'),(48,'Can delete tb route',16,'delete_tbroute'),(49,'Can add tb user',17,'add_tbuser'),(50,'Can change tb user',17,'change_tbuser'),(51,'Can delete tb user',17,'delete_tbuser'),(52,'Can add tb userinfo',18,'add_tbuserinfo'),(53,'Can change tb userinfo',18,'change_tbuserinfo'),(54,'Can delete tb userinfo',18,'delete_tbuserinfo'),(55,'Can add tb account',19,'add_tbaccount'),(56,'Can change tb account',19,'change_tbaccount'),(57,'Can delete tb account',19,'delete_tbaccount'),(58,'Can add r user friend',20,'add_ruserfriend'),(59,'Can change r user friend',20,'change_ruserfriend'),(60,'Can delete r user friend',20,'delete_ruserfriend'),(61,'Can add tb answer',21,'add_tbanswer'),(62,'Can change tb answer',21,'change_tbanswer'),(63,'Can delete tb answer',21,'delete_tbanswer'),(64,'Can add tb comment',22,'add_tbcomment'),(65,'Can change tb comment',22,'change_tbcomment'),(66,'Can delete tb comment',22,'delete_tbcomment'),(67,'Can add tb fee',23,'add_tbfee'),(68,'Can change tb fee',23,'change_tbfee'),(69,'Can delete tb fee',23,'delete_tbfee'),(70,'Can add tb flow',24,'add_tbflow'),(71,'Can change tb flow',24,'change_tbflow'),(72,'Can delete tb flow',24,'delete_tbflow'),(73,'Can add tb route',25,'add_tbroute'),(74,'Can change tb route',25,'change_tbroute'),(75,'Can delete tb route',25,'delete_tbroute'),(76,'Can add tb user',26,'add_tbuser'),(77,'Can change tb user',26,'change_tbuser'),(78,'Can delete tb user',26,'delete_tbuser'),(79,'Can add tb userinfo',27,'add_tbuserinfo'),(80,'Can change tb userinfo',27,'change_tbuserinfo'),(81,'Can delete tb userinfo',27,'delete_tbuserinfo'),(82,'Can add tb account',28,'add_tbaccount'),(83,'Can change tb account',28,'change_tbaccount'),(84,'Can delete tb account',28,'delete_tbaccount'),(85,'Can add auth group',29,'add_authgroup'),(86,'Can change auth group',29,'change_authgroup'),(87,'Can delete auth group',29,'delete_authgroup'),(88,'Can add auth group permissions',30,'add_authgrouppermissions'),(89,'Can change auth group permissions',30,'change_authgrouppermissions'),(90,'Can delete auth group permissions',30,'delete_authgrouppermissions'),(91,'Can add auth permission',31,'add_authpermission'),(92,'Can change auth permission',31,'change_authpermission'),(93,'Can delete auth permission',31,'delete_authpermission'),(94,'Can add auth user',32,'add_authuser'),(95,'Can change auth user',32,'change_authuser'),(96,'Can delete auth user',32,'delete_authuser'),(97,'Can add auth user groups',33,'add_authusergroups'),(98,'Can change auth user groups',33,'change_authusergroups'),(99,'Can delete auth user groups',33,'delete_authusergroups'),(100,'Can add auth user user permissions',34,'add_authuseruserpermissions'),(101,'Can change auth user user permissions',34,'change_authuseruserpermissions'),(102,'Can delete auth user user permissions',34,'delete_authuseruserpermissions'),(103,'Can add comment user',35,'add_commentuser'),(104,'Can change comment user',35,'change_commentuser'),(105,'Can delete comment user',35,'delete_commentuser'),(106,'Can add django admin log',36,'add_djangoadminlog'),(107,'Can change django admin log',36,'change_djangoadminlog'),(108,'Can delete django admin log',36,'delete_djangoadminlog'),(109,'Can add django content type',37,'add_djangocontenttype'),(110,'Can change django content type',37,'change_djangocontenttype'),(111,'Can delete django content type',37,'delete_djangocontenttype'),(112,'Can add django session',38,'add_djangosession'),(113,'Can change django session',38,'change_djangosession'),(114,'Can delete django session',38,'delete_djangosession'),(115,'Can add friend comment',39,'add_friendcomment'),(116,'Can change friend comment',39,'change_friendcomment'),(117,'Can delete friend comment',39,'delete_friendcomment'),(118,'Can add socialwifi person',40,'add_socialwifiperson'),(119,'Can change socialwifi person',40,'change_socialwifiperson'),(120,'Can delete socialwifi person',40,'delete_socialwifiperson'),(121,'Can add status',41,'add_status'),(122,'Can change status',41,'change_status'),(123,'Can delete status',41,'delete_status'),(124,'Can add message',42,'add_message'),(125,'Can change message',42,'change_message'),(126,'Can delete message',42,'delete_message');
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'log entry','admin','logentry'),(2,'permission','auth','permission'),(3,'group','auth','group'),(4,'user','auth','user'),(5,'content type','contenttypes','contenttype'),(6,'session','sessions','session'),(10,'person','socialwifi','person'),(11,'r user friend','socialwifi','ruserfriend'),(12,'tb answer','socialwifi','tbanswer'),(13,'tb comment','socialwifi','tbcomment'),(14,'tb fee','socialwifi','tbfee'),(15,'tb flow','socialwifi','tbflow'),(16,'tb route','socialwifi','tbroute'),(17,'tb user','socialwifi','tbuser'),(18,'tb userinfo','socialwifi','tbuserinfo'),(19,'tb account','socialwifi','tbaccount'),(20,'r user friend','core','ruserfriend'),(21,'tb answer','core','tbanswer'),(22,'tb comment','core','tbcomment'),(23,'tb fee','core','tbfee'),(24,'tb flow','core','tbflow'),(25,'tb route','core','tbroute'),(26,'tb user','core','tbuser'),(27,'tb userinfo','core','tbuserinfo'),(28,'tb account','core','tbaccount'),(29,'auth group','core','authgroup'),(30,'auth group permissions','core','authgrouppermissions'),(31,'auth permission','core','authpermission'),(32,'auth user','core','authuser'),(33,'auth user groups','core','authusergroups'),(34,'auth user user permissions','core','authuseruserpermissions'),(35,'comment user','core','commentuser'),(36,'django admin log','core','djangoadminlog'),(37,'django content type','core','djangocontenttype'),(38,'django session','core','djangosession'),(39,'friend comment','core','friendcomment'),(40,'socialwifi person','core','socialwifiperson'),(41,'status','core','status'),(42,'message','core','message');
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
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `sendname` varchar(45) DEFAULT NULL,
  `receive` varchar(45) DEFAULT NULL,
  `content` varchar(100) DEFAULT NULL,
  `satus` int(11) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=781 DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES ('lily','tt','lily在2014-05-25 17:34:00使用了您的3号路由器',1,'2014-05-25 17:34:00',550),('tt','lily','tt在2014-05-25 17:36:00使用了您的1号路由器',1,'2014-05-25 17:36:00',551),('lily','tt','tt本次资费为0',1,'2014-05-25 17:37:00',553),('tt','lily','tt本次资费为0',1,'2014-05-25 17:37:00',554),('tt','lily','tt在2014-05-25 17:40:00使用了您的1号路由器',1,'2014-05-25 17:40:00',635),('lily','tt','您的分组已被改变为never,资费变为100',1,'2014-05-25 17:42:00',636),('lily','tt','tt本次资费为10',1,'2014-05-25 17:42:00',637),('tt','lily','tt本次资费为10',1,'2014-05-25 17:42:00',638),('lily','tt','lily在2014-05-25 18:43:00使用了您的3号路由器',1,'2014-05-25 18:43:00',639),('tt','lily','tt在2014-05-25 19:12:00使用了您的1号路由器',1,'2014-05-25 19:12:00',640),('lily','tt','您的分组已被改变为common,资费变为10',1,'2014-05-25 19:13:00',641),('lily','tt','tt本次资费为100',1,'2014-05-25 19:13:00',642),('tt','lily','tt本次资费为100元',1,'2014-05-25 19:13:00',643),('wewee','lily','wewee在2014-05-25 19:30:00使用了您的1号路由器',1,'2014-05-25 19:30:00',644),('wewee','lily','wewee在2014-05-25 19:34:00成为您的新听众',1,'2014-05-25 19:34:00',645),('we11','tt','we11在2014-05-25 19:39:00使用了您的3号路由器',1,'2014-05-25 19:39:00',646),('tt','lily','tt在2014-05-25 20:06:00收听了您',1,'2014-05-25 20:06:00',647),('tt','lily','tt在2014-05-25 20:06:00使用了您的1号路由器',1,'2014-05-25 20:06:00',648),('er','tt','er在2014-05-25 20:06:00收听了您',1,'2014-05-25 20:06:00',649),('er','tt','er在2014-05-25 20:06:00使用了您的3号路由器',1,'2014-05-25 20:06:00',650),('tt','lily','tt在2014-05-25 21:50:00收听了您',1,'2014-05-25 21:50:00',651),('tt','lily','tt在2014-05-25 21:50:00使用了您的1号路由器',1,'2014-05-25 21:50:00',652),('tt','lily','tt在2014-05-25 22:05:00收听了您',1,'2014-05-25 22:05:00',653),('tt','lily','tt在2014-05-25 22:05:00使用了您的1号路由器',1,'2014-05-25 22:05:00',654),('tt','lily','tt在2014-05-25 22:13:00收听了您',1,'2014-05-25 22:13:00',655),('tt','lily','tt在2014-05-25 22:13:00使用了您的1号路由器',1,'2014-05-25 22:13:00',656),('tt','lily','tt在2014-05-25 22:17:00收听了您',1,'2014-05-25 22:17:00',657),('tt','lily','tt在2014-05-25 22:17:00使用了您的1号路由器',1,'2014-05-25 22:17:00',658),('tt','lily','tt在2014-05-25 22:19:00收听了您',1,'2014-05-25 22:19:00',659),('tt','lily','tt在2014-05-25 22:19:00使用了您的1号路由器',1,'2014-05-25 22:19:00',660),('tt','lily','tt在2014-05-25 22:39:00收听了您',1,'2014-05-25 22:39:00',661),('tt','lily','tt在2014-05-25 22:39:00使用了您的1号路由器',1,'2014-05-25 22:39:00',662),('tt','lily','tt在2014-05-26 00:35:00成为您的新听众',0,'2014-05-26 00:35:00',663),('tt','lily','tt在2014-05-26 00:36:00成为您的新听众',0,'2014-05-26 00:36:00',664),('tt','lily','tt在2014-05-26 00:43:00收听了您',0,'2014-05-26 00:43:00',665),('tt','lily','tt在2014-05-26 00:43:00使用了您的1号路由器',0,'2014-05-26 00:43:00',666),('tt','lily','tt在2014-05-26 01:25:00收听了您',0,'2014-05-26 01:25:00',667),('tt','lily','tt在2014-05-26 01:25:00使用了您的1号路由器',0,'2014-05-26 01:25:00',668),('tt','lily','tt在2014-05-26 01:38:00收听了您',0,'2014-05-26 01:38:00',669),('tt','lily','tt在2014-05-26 01:38:00使用了您的1号路由器',0,'2014-05-26 01:38:00',670),('lily','tt','lily在2014-05-26 01:57:00收听了您',1,'2014-05-26 01:57:00',673),('lily','tt','lily在2014-05-26 01:57:00使用了您的3号路由器',1,'2014-05-26 01:57:00',674),('tt','lily','tt在2014-05-26 01:58:00收听了您',0,'2014-05-26 01:58:00',675),('tt','lily','tt在2014-05-26 01:58:00使用了您的1号路由器',0,'2014-05-26 01:58:00',676),('lily','tt','您的分组已被改变为never,资费变为100',1,'2014-05-26 01:59:00',677),('lily','tt','tt本次资费为10',1,'2014-05-26 01:59:00',678),('tt','lily','tt本次资费为10元',0,'2014-05-26 01:59:00',679),('lily','tt','您的分组已被改变为family,资费变为0',1,'2014-05-26 02:01:00',680),('tt','lily','tt在2014-05-26 01:59:00收听了您',0,'2014-05-26 01:59:00',681),('tt','lily','tt在2014-05-26 01:59:00使用了您的1号路由器',0,'2014-05-26 01:59:00',682),('lily','tt','tt本次资费为30',1,'2014-05-26 02:02:00',683),('tt','lily','tt本次资费为30元',0,'2014-05-26 02:02:00',684),('tt','lily','tt在2014-05-26 02:03:00收听了您',0,'2014-05-26 02:03:00',685),('tt','lily','tt在2014-05-26 02:03:00使用了您的1号路由器',0,'2014-05-26 02:03:00',686),('tt','lily','tt在2014-05-26 02:54:00收听了您',0,'2014-05-26 02:54:00',687),('tt','lily','tt在2014-05-26 02:54:00使用了您的1号路由器',0,'2014-05-26 02:54:00',688),('lily','tt','小样，被发现了吧',1,'2014-05-26 02:59:00',689),('lily','tt','tt本次资费为-5',1,'2014-05-26 03:00:00',690),('tt','lily','tt本次资费为-5元',0,'2014-05-26 03:00:00',691),('tt','lily','tt在2014-05-26 03:00:00收听了您',0,'2014-05-26 03:00:00',692),('tt','lily','tt在2014-05-26 03:00:00使用了您的1号路由器',0,'2014-05-26 03:00:00',693),('tt','lily','tt在2014-05-26 03:01:00收听了您',0,'2014-05-26 03:01:00',694),('tt','lily','tt在2014-05-26 03:01:00使用了您的1号路由器',0,'2014-05-26 03:01:00',695),('tt','lily','tt在2014-05-26 03:03:00收听了您',0,'2014-05-26 03:03:00',696),('tt','lily','tt在2014-05-26 03:03:00使用了您的1号路由器',0,'2014-05-26 03:03:00',697),('lily','tt','小样，被发现了吧',1,'2014-05-26 03:04:00',698),('lily','tt','tt本次资费为10',0,'2014-05-26 03:04:00',699),('tt','lily','tt本次资费为10元',0,'2014-05-26 03:04:00',700),('lily','tt','小样，被发现了吧',1,'2014-05-26 03:09:00',701),('lily','tt','tt本次资费为40',0,'2014-05-26 03:09:00',702),('tt','lily','tt本次资费为40元',0,'2014-05-26 03:09:00',703),('tt','lily','tt在2014-05-26 12:58:00收听了您',0,'2014-05-26 12:58:00',704),('tt','lily','tt在2014-05-26 12:58:00使用了您的1号路由器',0,'2014-05-26 12:58:00',705),('lily','tt','您的分组已被改变为family,资费变为0',1,'2014-05-26 13:56:00',706),('lily','tt','tt本次资费为-58',0,'2014-05-26 13:56:00',707),('tt','lily','tt本次资费为-58元',0,'2014-05-26 13:56:00',708),('tt','lily','tt在2014-05-26 13:57:00收听了您',0,'2014-05-26 13:57:00',709),('tt','lily','tt在2014-05-26 13:57:00使用了您的1号路由器',0,'2014-05-26 13:57:00',710),('tt','lily','您的分组已被改变为family,资费变为0',1,'2014-05-26 14:37:00',711),('tt','lily','tt在2014-05-26 14:41:00收听了您',0,'2014-05-26 14:41:00',712),('tt','lily','tt在2014-05-26 14:41:00使用了您的1号路由器',0,'2014-05-26 14:41:00',713),('lily','tt','您的分组已被改变为common,资费变为10',1,'2014-05-26 15:03:00',714),('lily','tt','tt本次资费为0',0,'2014-05-26 15:03:00',715),('tt','lily','tt本次资费为0元',0,'2014-05-26 15:03:00',716),('tt','lily','tt在2014-05-26 15:30:00收听了您',0,'2014-05-26 15:30:00',717),('tt','lily','tt在2014-05-26 15:30:00使用了您的1号路由器',0,'2014-05-26 15:30:00',718),('lily','tt','您的分组已被改变为family,资费变为0',1,'2014-05-26 15:53:00',719),('lily','tt','tt本次资费为0',0,'2014-05-26 15:53:00',720),('tt','lily','tt本次资费为0元',0,'2014-05-26 15:53:00',721),('tt','lily','tt在2014-05-26 15:53:00收听了您',0,'2014-05-26 15:53:00',722),('tt','lily','tt在2014-05-26 15:53:00使用了您的1号路由器',0,'2014-05-26 15:53:00',723),('lily','tt','lily在2014-05-26 16:05:00成为您的新听众',0,'2014-05-26 16:05:00',724),('lily','tt','hi',1,'2014-05-26 16:05:00',725),('lily','tt','hi',1,'2014-05-26 16:09:00',726),('tt','lily','tt在2014-05-27 01:54:00收听了您',1,'2014-05-27 01:54:00',727),('tt','lily','tt在2014-05-27 01:54:00使用了您的1号路由器',1,'2014-05-27 01:54:00',728),('tt','lily','tt在2014-05-27 02:51:00收听了您',1,'2014-05-27 02:51:00',729),('tt','lily','tt在2014-05-27 02:51:00使用了您的1号路由器',1,'2014-05-27 02:51:00',730),('tt','lily','tt在2014-05-29 00:20:00收听了您',1,'2014-05-29 00:20:00',731),('tt','lily','tt在2014-05-29 00:20:00使用了您的1号路由器',1,'2014-05-29 00:20:00',732),('lily','yy','lily在2014-05-29 23:57:00成为您的新听众',0,'2014-05-29 23:57:00',733),('lily','SHE','lily在2014-05-30 01:00:00成为您的新听众',0,'2014-05-30 01:00:00',734),('lily','tt','lily在2014-05-30 01:17:00成为您的新听众',0,'2014-05-30 01:17:00',735),('lily','SHE','lily在2014-05-30 01:20:00成为您的新听众',0,'2014-05-30 01:20:00',736),('tt','lily','tt在2014-05-30 01:29:00收听了您',1,'2014-05-30 01:29:00',737),('tt','lily','tt在2014-05-30 01:29:00使用了您的1号路由器',0,'2014-05-30 01:29:00',738),('lily','tt','lily在2014-05-30 01:30:00收听了您',0,'2014-05-30 01:30:00',739),('lily','tt','lily在2014-05-30 01:30:00使用了您的3号路由器',0,'2014-05-30 01:30:00',740),('tt','lily','lily本次资费为0',1,'2014-05-30 01:30:00',741),('lily','tt','lily本次资费为0元',0,'2014-05-30 01:30:00',742),('uy','lily','uy在2014-05-30 01:32:00收听了您',1,'2014-05-30 01:32:00',743),('uy','lily','uy在2014-05-30 01:32:00使用了您的1号路由器',1,'2014-05-30 01:32:00',744),('lily','tt','lily在2014-05-30 01:33:00收听了您',0,'2014-05-30 01:33:00',745),('lily','tt','lily在2014-05-30 01:33:00使用了您的3号路由器',0,'2014-05-30 01:33:00',746),('iu','tt','iu在2014-05-30 01:34:00收听了您',0,'2014-05-30 01:34:00',747),('iu','tt','iu在2014-05-30 01:34:00使用了您的3号路由器',0,'2014-05-30 01:34:00',748),('tt','lily','tt在2014-05-30 01:34:00收听了您',1,'2014-05-30 01:34:00',749),('tt','lily','tt在2014-05-30 01:34:00使用了您的1号路由器',1,'2014-05-30 01:34:00',750),('rtt','tt','rtt在2014-05-30 02:08:00收听了您',1,'2014-05-30 02:08:00',751),('rtt','tt','rtt在2014-05-30 02:08:00使用了您的3号路由器',1,'2014-05-30 02:08:00',752),('tt','rtt','rtt本次资费为-2',0,'2014-05-30 02:09:00',753),('rtt','tt','rtt本次资费为-2',1,'2014-05-30 02:09:00',754),('uip','tt','uip在2014-05-30 02:20:00收听了您',1,'2014-05-30 02:20:00',755),('uip','tt','uip在2014-05-30 02:20:00使用了您的3号路由器',1,'2014-05-30 02:20:00',756),('tt','uip','uip本次资费为20',1,'2014-05-30 02:22:00',757),('uip','tt','uip本次资费为20',0,'2014-05-30 02:22:00',758),('tyu','tt','tyu在2014-05-30 02:30:00收听了您',1,'2014-05-30 02:30:00',759),('tyu','tt','tyu在2014-05-30 02:30:00使用了您的3号路由器',1,'2014-05-30 02:30:00',760),('rty','tt','rty在2014-05-30 02:33:00收听了您',1,'2014-05-30 02:33:00',761),('rty','tt','rty在2014-05-30 02:33:00使用了您的3号路由器',1,'2014-05-30 02:33:00',762),('tt','rty','rty本次资费为20',1,'2014-05-30 02:35:00',763),('rty','tt','rty本次资费为20',1,'2014-05-30 02:35:00',764),('tt','rty','您的分组已被改变为never,资费变为100',1,'2014-05-30 02:36:00',765),('tt','rty','rty本次资费为30',1,'2014-05-30 02:36:00',766),('rty','tt','rty本次资费为30元',0,'2014-05-30 02:36:00',767),('rty','tt','rty在2014-05-30 02:48:00收听了您',0,'2014-05-30 02:48:00',768),('rty','tt','rty在2014-05-30 02:48:00使用了您的3号路由器',0,'2014-05-30 02:48:00',769),('tt','rty','您的分组已被改变为never,资费变为100',1,'2014-05-30 02:49:00',770),('tt','rty','rty本次资费为10',1,'2014-05-30 02:49:00',771),('rty','tt','rty本次资费为10元',1,'2014-05-30 02:49:00',772),('rty','tt','rty在2014-05-30 02:49:00收听了您',0,'2014-05-30 02:49:00',773),('rty','tt','rty在2014-05-30 02:49:00使用了您的3号路由器',0,'2014-05-30 02:49:00',774),('rty','tt','rty说：求关注，求调资费',1,'2014-05-30 02:58:00',775),('tt','rty','您的分组已被改变为best,资费变为5',1,'2014-05-30 02:58:00',776),('tt','rty','rty本次资费为900',0,'2014-05-30 02:58:00',777),('rty','tt','rty本次资费为900元',0,'2014-05-30 02:58:00',778),('rty','tt','rty在2014-05-30 02:59:00收听了您',0,'2014-05-30 02:59:00',779),('rty','tt','rty在2014-05-30 02:59:00使用了您的3号路由器',0,'2014-05-30 02:59:00',780);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_user_friend`
--

DROP TABLE IF EXISTS `r_user_friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_user_friend` (
  `authorityname` varchar(45) DEFAULT NULL,
  `availableflow` int(11) DEFAULT NULL,
  `friendname` varchar(45) NOT NULL,
  `ownername` varchar(45) NOT NULL,
  `ownerauthority` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`friendname`,`ownername`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_user_friend`
--

LOCK TABLES `r_user_friend` WRITE;
/*!40000 ALTER TABLE `r_user_friend` DISABLE KEYS */;
INSERT INTO `r_user_friend` VALUES ('common',30,'david','lily','common'),('family',NULL,'ee','ee','family'),('family',NULL,'er','er','family'),('common',NULL,'iu','iu','family'),('common',NULL,'li','li','family'),('common',NULL,'lie','lie','family'),('common',NULL,'lie3','lie3','family'),('common',NULL,'liew','liew','family'),('family',100,'lily','lily','family'),('common',NULL,'lily','rr','common'),('family',NULL,'lily','tt','family'),('common',NULL,'lily','uy','common'),('common',NULL,'lily','wewee','common'),('best',100,'lucy','lily','common'),('common',NULL,'oo','oo','common'),('family',NULL,'ooop','ooop','family'),('family',NULL,'qwt','qwt','family'),('common',NULL,'rr','rr','family'),('family',NULL,'rtt','rtt','family'),('family',NULL,'rty','rty','family'),('common',NULL,'SHE','lily','common'),('common',NULL,'tt','er','common'),('common',NULL,'tt','iu','common'),('common',NULL,'tt','lily','common'),('common',NULL,'tt','rtt','common'),('common',NULL,'tt','rty','best'),('family',NULL,'tt','tt','family'),('common',NULL,'tt','tyu','common'),('common',NULL,'tt','uip','common'),('family',NULL,'tyu','tyu','family'),('family',NULL,'uip','uip','family'),('family',NULL,'uy','uy','family'),('family',NULL,'we11','we11','family'),('family',NULL,'wewee','wewee','family'),('family',NULL,'yui','yui','family');
/*!40000 ALTER TABLE `r_user_friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `username` varchar(45) DEFAULT NULL,
  `satus` int(11) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `routeid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES ('lily',1,'2014-05-30 12:35:00',1,1),('lucy',0,'2014-05-17 00:00:00',2,-1),('david',0,'2014-05-17 00:00:00',3,-1),('cooper',0,'2014-05-18 03:02:00',4,-1),('tt',1,'2014-06-01 13:39:00',5,3),('oo',0,'2014-05-18 03:02:00',6,-1),('liew',1,'2014-05-21 20:13:00',7,1),('ee',-1,'2014-05-23 13:19:00',8,1),('wewee',1,'2014-05-25 19:30:00',9,1),('we11',1,'2014-05-25 19:39:00',10,3),('er',1,'2014-05-25 20:06:00',11,3),('uy',1,'2014-05-30 01:32:00',12,1),('iu',1,'2014-05-30 01:34:00',13,3),('rtt',1,'2014-05-30 02:08:00',14,3),('qwt',-1,'2014-05-30 02:14:00',15,1),('ooop',-1,'2014-05-30 02:15:00',16,3),('uip',1,'2014-05-30 02:20:00',17,3),('yui',-1,'2014-05-30 02:25:00',18,3),('tyu',1,'2014-05-30 02:30:00',19,3),('rty',1,'2014-05-30 02:59:00',20,3);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_account`
--

DROP TABLE IF EXISTS `tb_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_account` (
  `username` varchar(45) DEFAULT NULL,
  `jieyuflow` int(11) DEFAULT NULL,
  `userdflow` int(11) DEFAULT NULL,
  `lastmonthflow` int(11) DEFAULT NULL,
  `getflow` int(11) DEFAULT NULL,
  `month` date DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `userid_account` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_account`
--

LOCK TABLES `tb_account` WRITE;
/*!40000 ALTER TABLE `tb_account` DISABLE KEYS */;
INSERT INTO `tb_account` VALUES ('lily',0,515,0,515,'2014-05-30',1),('lucy',12,12,12,22,'2013-01-01',2),('tt',900,1067,0,1967,'2014-05-30',3),('ee',0,0,0,0,'2014-05-23',4),('wewee',0,0,0,0,'2014-05-25',5),('we11',0,0,0,0,'2014-05-25',6),('er',0,0,0,0,'2014-05-25',7),('uy',0,0,0,0,'2014-05-30',8),('iu',0,0,0,0,'2014-05-30',9),('rtt',2,-2,0,0,'2014-05-30',10),('qwt',0,0,0,0,'2014-05-30',11),('ooop',0,0,0,0,'2014-05-30',12),('uip',-20,20,0,0,'2014-05-30',13),('yui',0,0,0,0,'2014-05-30',14),('tyu',0,0,0,0,'2014-05-30',15),('rty',-900,960,0,60,'2014-05-30',16);
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
  `uername` varchar(45) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `replyname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`answerid`),
  KEY `commentid_idx` (`commentid`),
  KEY `userid_answer_idx` (`uername`),
  KEY `replyanswerid_idx` (`replyanswerid`),
  CONSTRAINT `commentid` FOREIGN KEY (`commentid`) REFERENCES `tb_comment` (`commentid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `replyanswerid` FOREIGN KEY (`replyanswerid`) REFERENCES `tb_answer` (`answerid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_answer`
--

LOCK TABLES `tb_answer` WRITE;
/*!40000 ALTER TABLE `tb_answer` DISABLE KEYS */;
INSERT INTO `tb_answer` VALUES (1,1,NULL,'hello','lily','2014-02-01 00:00:00','lily'),(3,2,NULL,'hi','lucy','2014-03-01 00:00:00','lucy'),(4,3,NULL,'hi','david','2014-03-02 00:00:00','david'),(6,1,1,'hi','david','2014-03-10 00:00:00','david'),(7,2,NULL,'你好','david','2014-03-17 00:00:00','david'),(8,1,1,'hi','cooper','2013-02-01 00:00:00','lily'),(9,1,1,'我们出去玩','cooper','2013-02-01 00:00:00','lily'),(10,3,1,'eqfewqfe','david','2014-05-20 17:21:00','lily'),(11,3,1,'eqfew1212121','david','2014-05-20 17:23:00','lily'),(12,3,1,'wewewewewewe','david','2014-05-20 17:23:00','lily'),(13,3,1,'嘿嘿嘿','david','2014-05-20 17:24:00','lily'),(14,3,1,'fffff','david','2014-05-20 17:47:00','lily'),(15,3,1,'afafadfasdfasdfadsfasd','david','2014-05-20 18:09:00','lily'),(16,3,1,'vzcvzcv','david','2014-05-20 18:35:00','lily'),(17,3,1,'let go','david','2014-05-20 18:51:00','lily'),(18,3,1,'fdafda','david','2014-05-20 19:08:00','lily'),(19,3,1,'eeee','david','2014-05-20 19:54:00','lily'),(20,3,1,'eeee','david','2014-05-20 20:35:00','lily'),(21,23,1,'嘿嘿','tt','2014-05-20 20:48:00','tt'),(22,3,1,'gogogogo','david','2014-05-21 00:55:00','lily'),(23,24,1,'yeah~','lily','2014-05-21 01:01:00','tt'),(24,25,1,'great','lily','2014-05-21 01:04:00','tt'),(25,26,1,'me too','lily','2014-05-21 01:08:00','tt'),(26,26,1,'sigh~','lily','2014-05-21 01:09:00','lily'),(27,3,1,'iiiiii','david','2014-05-21 10:48:00','lily'),(28,27,1,'yes','lily','2014-05-21 10:50:00','rr'),(29,28,1,'fighting','lily','2014-05-25 17:48:00','tt'),(30,29,1,'嘿嘿嘿，我很开心','lily','2014-05-30 00:59:00','lily'),(31,3,1,'sigh~','david','2014-05-30 00:59:00','lily'),(32,30,1,'yeah','lily','2014-05-30 02:01:00','lily'),(33,23,1,'hi~','tt','2014-05-30 02:31:00','tyu'),(34,23,1,'new','tt','2014-05-30 02:34:00','rty');
/*!40000 ALTER TABLE `tb_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_comment`
--

DROP TABLE IF EXISTS `tb_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_comment` (
  `commentid` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(200) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`commentid`),
  KEY `username_idx` (`username`),
  KEY `username_comment_idx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_comment`
--

LOCK TABLES `tb_comment` WRITE;
/*!40000 ALTER TABLE `tb_comment` DISABLE KEYS */;
INSERT INTO `tb_comment` VALUES (1,'hello','2014-02-01 00:00:00','lily'),(2,'hi','2014-02-28 00:00:00','lucy'),(3,'good night','2014-03-01 00:00:00','david'),(4,'hello','2014-03-10 00:00:00','lily'),(5,'hello','2014-03-10 00:00:00','lily'),(6,'hello','2014-03-10 00:00:00','lily'),(17,'hi','2014-03-10 00:00:00','lucy'),(18,'nice job','2014-05-20 01:09:00','lily'),(19,'afdafadfadfa','2014-05-20 16:32:00','lily'),(20,'ffff','2014-05-20 18:51:00','lily'),(21,'hhhhhhh','2014-05-20 19:38:00','yy'),(22,'eeeeeeeee','2014-05-20 19:54:00','lily'),(23,'so happy','2014-05-20 20:48:00','tt'),(24,'nice day','2014-05-21 01:00:00','lily'),(25,'so far so good','2014-05-21 01:03:00','lily'),(26,'tired','2014-05-21 01:08:00','lily'),(27,' good day','2014-05-21 10:50:00','lily'),(28,'finished','2014-05-25 17:48:00','lily'),(29,'today is 5.30','2014-05-30 00:58:00','lily'),(30,'annotation','2014-05-30 02:00:00','lily');
/*!40000 ALTER TABLE `tb_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_fee`
--

DROP TABLE IF EXISTS `tb_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_fee` (
  `feeid` int(11) NOT NULL AUTO_INCREMENT,
  `authorityname` varchar(45) DEFAULT NULL,
  `payflow` int(11) DEFAULT NULL,
  PRIMARY KEY (`feeid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_fee`
--

LOCK TABLES `tb_fee` WRITE;
/*!40000 ALTER TABLE `tb_fee` DISABLE KEYS */;
INSERT INTO `tb_fee` VALUES (1,'best',5),(2,'family',0),(3,'common',10),(4,'never',100);
/*!40000 ALTER TABLE `tb_fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_flow`
--

DROP TABLE IF EXISTS `tb_flow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_flow` (
  `flowid` int(11) NOT NULL,
  `routerid` int(11) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `stop_time` datetime DEFAULT NULL,
  PRIMARY KEY (`flowid`),
  KEY `routerid_idx` (`routerid`),
  KEY `userid_idx` (`username`),
  KEY `userid_idx1` (`username`),
  KEY `routerid_idx1` (`routerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_flow`
--

LOCK TABLES `tb_flow` WRITE;
/*!40000 ALTER TABLE `tb_flow` DISABLE KEYS */;
INSERT INTO `tb_flow` VALUES (0,1,'lily','2014-03-02 00:00:00','2014-03-02 00:10:00'),(1,2,'lucy','2014-03-03 00:00:00','2013-03-02 11:00:00');
/*!40000 ALTER TABLE `tb_flow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_route`
--

DROP TABLE IF EXISTS `tb_route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_route` (
  `routerid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `flow` int(11) DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `ip` varchar(40) DEFAULT NULL,
  `owner` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`routerid`),
  KEY `owner_idx` (`owner`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_route`
--

LOCK TABLES `tb_route` WRITE;
/*!40000 ALTER TABLE `tb_route` DISABLE KEYS */;
INSERT INTO `tb_route` VALUES (1,'cmcc',200,31,120,'192.168.0.32','lily'),(3,'tt',600,29,121,'192.168.0.7','tt'),(4,'TT',500,33,122,'192.168.0.39','lily');
/*!40000 ALTER TABLE `tb_route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_user`
--

LOCK TABLES `tb_user` WRITE;
/*!40000 ALTER TABLE `tb_user` DISABLE KEYS */;
INSERT INTO `tb_user` VALUES (1,'333333','cooper'),(2,'222222','david'),(3,'000000','lily'),(4,'111111','lucy'),(5,'Annie','000000'),(6,'123456','SHE'),(7,'123456','yy'),(8,'123456','ty'),(9,'123456','uu'),(10,'123456','tt'),(11,'12345','rr'),(12,'000000','oo'),(17,'000000','liew'),(18,'111111','ee'),(19,'123456','wewee'),(20,'123456','we11'),(21,'000000','er'),(22,'111111','uy'),(23,'000000','iu'),(24,'000000','rtt'),(25,'000000','qwt'),(26,'000000','ooop'),(27,'000000','uip'),(28,'000000','yui'),(29,'000000','tyu'),(30,'000000','rty');
/*!40000 ALTER TABLE `tb_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_userinfo`
--

DROP TABLE IF EXISTS `tb_userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_userinfo` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `mypassword` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_userinfo`
--

LOCK TABLES `tb_userinfo` WRITE;
/*!40000 ALTER TABLE `tb_userinfo` DISABLE KEYS */;
INSERT INTO `tb_userinfo` VALUES (1,'lily','read','2014-05-15','null','000000'),(2,'lucy','football','1990-02-02','nanjing','111111'),(3,'david','ktv','1991-01-02','suzhou','222222'),(4,'cooper','read','2001-02-01','shanghai','333333'),(5,'Annie',NULL,NULL,NULL,NULL),(6,'SHE','null',NULL,NULL,NULL),(7,'yy','null',NULL,NULL,NULL),(8,'ty','music','2014-05-02','null','123456'),(9,'uu',NULL,NULL,NULL,'123456'),(10,'tt','null',NULL,NULL,'123456'),(11,'rr',NULL,NULL,NULL,'12345'),(12,'oo',NULL,NULL,NULL,'000000'),(13,'iu',NULL,NULL,NULL,'000000'),(14,'li',NULL,NULL,NULL,'000000'),(15,'lie',NULL,NULL,NULL,'000000'),(16,'lie3',NULL,NULL,NULL,'000000'),(17,'liew',NULL,NULL,NULL,'000000'),(18,'ee',NULL,NULL,NULL,'111111'),(19,'wewee',NULL,NULL,NULL,'123456'),(20,'we11',NULL,NULL,NULL,'123456'),(21,'er',NULL,NULL,NULL,'000000'),(22,'uy',NULL,NULL,NULL,'111111'),(23,'iu',NULL,NULL,NULL,'000000'),(24,'rtt','music','2014-05-01','null','111111'),(25,'qwt',NULL,NULL,NULL,'000000'),(26,'ooop',NULL,NULL,NULL,'000000'),(27,'uip','food','2014-05-01','null','000000'),(28,'yui',NULL,NULL,NULL,'000000'),(29,'tyu','music','2014-05-01','null','000000'),(30,'rty','music','2014-05-01','null','000000');
/*!40000 ALTER TABLE `tb_userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-06-01 15:50:03
