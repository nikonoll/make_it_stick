-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Card`;
CREATE TABLE `Card` (
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deckid` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `deckid` (`deckid`),
  CONSTRAINT `Card_ibfk_1` FOREIGN KEY (`deckid`) REFERENCES `Deck` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Card` (`answer`, `deckid`, `id`, `question`) VALUES
('Mimolette',	1,	1,	'Which cheese is the most orange?'),
('24 months',	1,	2,	'What is the oldest comté you should buy?'),
('Barolo',	2,	3,	'Wine with the most tanines?');

DROP TABLE IF EXISTS `Deck`;
CREATE TABLE `Deck` (
  `authorId` int DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`),
  CONSTRAINT `Deck_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Deck` (`authorId`, `description`, `id`, `published`, `title`) VALUES
(1,	'A lot of things about cheese',	1,	0,	'Cheese Deck'),
(1,	'A lot more questions about wine',	2,	0,	'Wine Deck');

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User.email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `User` (`email`, `id`, `name`) VALUES
('dernikonoll@gmail.com',	1,	'Niko');

-- 2020-06-23 20:24:15
