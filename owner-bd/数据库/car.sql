/*
MySQL Data Transfer
Source Host: localhost
Source Database: car
Target Host: localhost
Target Database: car
Date: 2017/5/15 9:27:18
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
  `status` varchar(10) DEFAULT '未处理',
  `jianyanyuan` varchar(20) DEFAULT NULL,
  `lingjian` varchar(20) DEFAULT '0.0',
  `weixiu` varchar(20) DEFAULT '0.0',
  `description` varchar(500) DEFAULT NULL,
  `severid` int(10) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

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
INSERT INTO `car_cars` VALUES ('9', '1', 'A2132', '大型', '奥迪', '山西', '2017-05-08', '3', '杨罡', '1000.0', '200.0', '车灯100元，倒车镜100元，钢管200元，自动车床600元', '1', '服务很好，不过有点贵，希望下次能改进！');
INSERT INTO `car_cars` VALUES ('10', '1', 'B2132', '中型', '红旗', '吉林', '2017-05-01', '2', '杨罡', '100.0', '100.0', '排气筒100元', '1', null);
INSERT INTO `car_cars` VALUES ('11', '1', 'C3133', '微型', '宝马', '上海', '2017-04-30', '2', null, '0.0', '0.0', null, '1', null);
INSERT INTO `car_cars` VALUES ('12', '1', 'D2312', '中小型', '陆虎', '安徽', '2017-05-02', '1', null, '0.0', '0.0', null, null, null);
INSERT INTO `car_cars` VALUES ('13', '1', 'E2312', '大型', '奔驰', '山东', '2017-05-09', '0', null, '0.0', '0.0', null, null, null);
INSERT INTO `car_cars` VALUES ('14', '1', 'F2133', '中型', '本田', '日本', '2017-05-16', '0', null, '0.0', '0.0', null, null, null);
INSERT INTO `car_person` VALUES ('1', 'yanggang', '123123', '杨罡', '男', '1234567891234567', '12745674567');
INSERT INTO `car_sever` VALUES ('1', 'yanggang', '杨罡', '123321', '男', '1234567891234567', '12745674567');
