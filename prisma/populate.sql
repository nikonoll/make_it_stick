-- create tables

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Card`;
CREATE TABLE `Card` (
  `answer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deckId` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime(3) NOT NULL,
  `repScore` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `deckId` (`deckId`),
  CONSTRAINT `Card_ibfk_1` FOREIGN KEY (`deckId`) REFERENCES `Deck` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `Deck`;
CREATE TABLE `Deck` (
  `authorId` int DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`),
  CONSTRAINT `Deck_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User.email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2020-06-26 07:04:17
-- INSERT DATA 

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

INSERT INTO `Card` (`answer`, `id`, `question`, `deckId`, `createdAt`, `updatedAt`, `repScore`) VALUES
('Mimolette',	1,	'Which cheese is the most orange?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('24 months',	2,	'What is the oldest comté you should buy?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('Barolo',	3,	'Wine with the most tanines?',	2,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0);

INSERT INTO `Deck` (`authorId`, `description`, `id`, `published`, `title`, `createdAt`, `updatedAt`) VALUES
(1,	'A lot of things about cheese',	1,	0,	'Cheese Deck',	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000'),
(1,	'A lot more questions about wine',	2,	0,	'Wine Deck',	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000');

INSERT INTO `User` (`email`, `id`, `name`, `createdAt`, `updatedAt`) VALUES
('dernikonoll@gmail.com',	1,	'Niko',	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000');

-- 2020-06-26 07:03:46
