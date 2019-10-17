/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.30-log : Database - subastas
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`subastas` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `subastas`;

/*Table structure for table `categorias` */

DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `categorias` */

/*Table structure for table `marcas` */

DROP TABLE IF EXISTS `marcas`;

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `marcas` */

/*Table structure for table `ofertantes` */

DROP TABLE IF EXISTS `ofertantes`;

CREATE TABLE `ofertantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) DEFAULT NULL,
  `apellido_paterno` varchar(50) DEFAULT NULL,
  `apellido_materno` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `grado_instruccion` varchar(30) DEFAULT NULL,
  `estado_civil` varchar(30) DEFAULT NULL,
  `sexo` int(11) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `olvido` varchar(100) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*Data for the table `ofertantes` */

insert  into `ofertantes`(`id`,`nombres`,`apellido_paterno`,`apellido_materno`,`direccion`,`grado_instruccion`,`estado_civil`,`sexo`,`fecha_nacimiento`,`usuario`,`clave`,`olvido`,`correo`) values (1,'Junior','Gomez','Contreras','Av. Revolucion 1549','uniii','soltero',0,'0000-00-00','loquifru1','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(2,'Jorge','Suarez','weweew','ewew',NULL,NULL,NULL,NULL,'loquifru2','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(3,'Liliii','Fernandini','sssd','sdsd',NULL,NULL,NULL,NULL,'loquifru3','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(4,'Bad Bunny','Torres','sdsd','445',NULL,NULL,NULL,NULL,'loquifru4','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(5,'Cabriiii','Valenxuela','aa','ewff',NULL,NULL,NULL,NULL,'loquifru5','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(6,'Osito','Torres','bbb','xccxcx',NULL,NULL,NULL,NULL,'loquifru6','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(7,'Juanita','Suaresz','cc','sffs',NULL,NULL,NULL,NULL,'loquifru7','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(8,'Adriana','Valenzuela','Perez','ddd',NULL,NULL,NULL,NULL,'loquifru8','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(9,'El causa','Jirirr','Perez','sss',NULL,NULL,NULL,NULL,'loquifru9','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(10,'Dionisio','ventran','Perez','aaa',NULL,NULL,NULL,NULL,'loquifru10','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(11,'Elver','Galarga','eeee','Perez',NULL,NULL,NULL,NULL,'loquifru11','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(12,'Larry','Perez','Perez','nnn',NULL,NULL,NULL,NULL,'loquifru12','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(13,'Juan','Perez','Perez','Perez','grado 1','estado civil 1',0,'0000-00-00','loquifru','/1RWkinAJb6XyTuVHtcGmNnPheRtitqVH+uC4YhtzDw=',NULL,'juniorgomez1305@gmail.com'),(14,'Diana','Perez','Torres','prueba 123','uni','Soltera',0,'2012-05-10','diana','kBSJMJ/CAXl3QiW9lKzGJZb/UclB4PwS8M0AIeToj4A=',NULL,'diana@gmail.com'),(15,'Julio','Torres','Torres','prueba','universitaria','soltera',0,'0000-00-00','julio','BoRq2lZwyJHtWx0S77TG0sXebfGGvHtS1KFc4PLdcQE=',NULL,'julio@gmail.com');

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` text,
  `precio_base` double DEFAULT NULL,
  `subasta_id` int(11) DEFAULT NULL,
  `marca_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `ruta_imagen` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `productos` */

/*Table structure for table `pujas` */

DROP TABLE IF EXISTS `pujas`;

CREATE TABLE `pujas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `precio` double DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `subasta_id` int(11) DEFAULT NULL,
  `ofertante_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `pujas` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

insert  into `roles`(`id`,`descripcion`) values (1,'admin'),(2,'Doctor'),(3,'Paciente');

/*Table structure for table `subastas` */

DROP TABLE IF EXISTS `subastas`;

CREATE TABLE `subastas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `precio` double DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_alargada` datetime DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `subasta_id` int(11) DEFAULT NULL,
  `precio_ganador` double DEFAULT NULL,
  `usuario_ganador` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `subastas` */

/*Table structure for table `tipo_subasta` */

DROP TABLE IF EXISTS `tipo_subasta`;

CREATE TABLE `tipo_subasta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tipo_subasta` */

/*Table structure for table `tipp_orfertantes` */

DROP TABLE IF EXISTS `tipp_orfertantes`;

CREATE TABLE `tipp_orfertantes` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tipp_orfertantes` */

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(25) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `usuario` varchar(15) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `olvido` varchar(100) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `especialidad` varchar(20) DEFAULT NULL,
  `colegiatura` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_rol_fk` (`rol_id`),
  CONSTRAINT `usuario_rol_fk` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`nombres`,`apellidos`,`correo`,`usuario`,`clave`,`olvido`,`rol_id`,`especialidad`,`colegiatura`) values (1,'Junior','Gomez','juniorgomez1305@gmail.com','admin','zi5aWc1GP+DQaHAWW3AMbtAuJLc5+vzLO29WWsMLwOQ=',NULL,1,'administrador','34343335'),(2,'Juan','Perez Perez','juan@gmail.com','medico1','hgRzAwXMKA6hfj/DKZhpTOZ8s97fjeX1Glmoe8mLp/s=',NULL,2,'pediatria','45546546'),(4,'Larry','Torres Velez','larry@hotmail.com','medico2','hgRzAwXMKA6hfj/DKZhpTOZ8s97fjeX1Glmoe8mLp/s=',NULL,2,'ginecologia','45557657'),(5,'Julissa','Mendez Vela','julissa@gmail.com','medico3','hgRzAwXMKA6hfj/DKZhpTOZ8s97fjeX1Glmoe8mLp/s=',NULL,2,'traumatologia','5676756'),(6,'Luisa','Contreras Saenz','luisa@gmail.com','medico4','hgRzAwXMKA6hfj/DKZhpTOZ8s97fjeX1Glmoe8mLp/s=','4c7242737d55b8362b32f38f8a72613f',2,'traumatologia','57675765765'),(7,'Tatiana','Nuñez Perez','tatiana@gmail.com','medico5','hgRzAwXMKA6hfj/DKZhpTOZ8s97fjeX1Glmoe8mLp/s=',NULL,2,'oftalmologia','56756756756');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
