/*
MySQL Data Transfer
Source Host: localhost
Source Database: car
Target Host: localhost
Target Database: car
Date: 2017/5/22 8:08:50
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for car_cars
-- ----------------------------
DROP TABLE IF EXISTS `car_cars`;
CREATE TABLE `car_cars` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userid` int(10) DEFAULT NULL,
  `chepaihao` varchar(20) DEFAULT NULL,
  `xinghao` varchar(20) DEFAULT NULL,
  `pinpai` varchar(20) DEFAULT NULL,
  `chandi` varchar(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `jianyanyuan` varchar(20) DEFAULT NULL,
  `lingjian` varchar(20) DEFAULT '0.0',
  `weixiu` varchar(20) DEFAULT '0.0',
  `description` varchar(500) DEFAULT NULL,
  `severid` int(10) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `apply` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for car_person
-- ----------------------------
DROP TABLE IF EXISTS `car_person`;
CREATE TABLE `car_person` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for car_sever
-- ----------------------------
DROP TABLE IF EXISTS `car_sever`;
CREATE TABLE `car_sever` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `car_cars` VALUES ('18', '1', '4', '4', '4', '4', '2017-05-01', '1', null, '0.0', '0.0', null, null, null, '发动机维修 制动维修 ', '1234124123');
INSERT INTO `car_cars` VALUES ('19', '1', '5', '5', '5', '5', '2017-05-02', '2', '杨罡', '100.0', '100.0', '发动机50元，四轮30元，其余20元', '1', null, '发动机维修 变速器维修 四轮定位 ', '发动机什么鬼，变速器什么鬼，四轮定位');
INSERT INTO `car_cars` VALUES ('20', '1', '6', '6', '6', '6', '2017-05-02', '0', null, '0.0', '0.0', null, null, null, '发动机维修 制动维修 ', '王企鹅群翁群无');
INSERT INTO `car_cars` VALUES ('21', '1', '7', '7', '7', '7', '2017-05-01', '0', null, '0.0', '0.0', null, null, null, '{\"weixiu1\":true}', '王企鹅群翁群无');
INSERT INTO `car_cars` VALUES ('15', '1', '1', '1', '1', '1', '2017-05-01', '2', '杨罡', '100.0', '200.0', '车灯100元', '1', null, null, null);
INSERT INTO `car_cars` VALUES ('16', '1', '2', '2', '2', '2', '2017-05-01', '6', '杨罡', '100.0', '200.0', '垫子100元', '1', '服务不错！价格公道！请我吃饭！', null, null);
INSERT INTO `car_cars` VALUES ('17', '1', '3', '3', '3', '3', '2017-05-02', '1', null, '0.0', '0.0', null, null, null, '{\"weixiu1\":true}', '312321312');
INSERT INTO `car_person` VALUES ('1', 'yanggang', '123123', '杨罡', '男', '1234567891234567', '12745674567');
INSERT INTO `car_sever` VALUES ('1', 'yanggang', '杨罡', '123321', '男', '1234567891234567', '12745674567');
