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

INSERT INTO `Card` (`answer`, `question`, `deckId`, `createdAt`, `updatedAt`, `repScore`) VALUES
('Mimolette',	'Which cheese is the most orange?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('The cheese was discovered by accident by ancients carrying milk in the stomach linings of animals.',	'How was cheese discovered?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('24 months',	'What is the oldest comté you should buy?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('Its the most stolen food',	'Interesting fact about purchasing',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('When cheese is digested it breaks down into an opiod. Other opiods are heroin and morphine',	'Why is cheese addictive?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('naturally orange',	'Cheddar is never?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('Stilton blue cheese is known to frequently cause odd, vivid dreams',	'Craziest effect of cheese?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('There’s a cheese from Sardinia with maggots in it that’s outlawed by European Union food hygiene-health regulations, however, it’s still made and sold on the black market',	'Cheese from Sardinia?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('People started dying cheese orange back in the 17th century to fool people into thinking it was higher quality.',	'Why is cheese orange?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('Amino Acid crystals',	'What are the crunchy bits in aged cheese?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('from 1615 BC in China and resembles cottage cheese',	'Oldest known cheese?',	1,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0),
('Barolo',	'Wine with the most tanines?',	2,	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000',	0);

INSERT INTO `Deck` (`authorId`, `description`, `id`, `published`, `title`, `createdAt`, `updatedAt`) VALUES
(1,	'A lot of things about cheese',	1,	0,	'Cheese Deck',	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000'),
(1,	'A lot more questions about wine',	2,	0,	'Wine Deck',	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000');

INSERT INTO `User` (`email`, `id`, `name`, `createdAt`, `updatedAt`) VALUES
('dernikonoll@gmail.com',	1,	'Niko',	'2020-06-26 07:03:03',	'2020-06-06 17:00:00.000');

-- 2020-06-26 07:03:46
