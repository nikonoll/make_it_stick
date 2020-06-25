# Migration `20200623221847-add-card`

This migration has been generated by Niko Noll at 6/23/2020, 10:18:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `db`.`Card` (
`answer` varchar(191) NOT NULL  ,`deckid` int NOT NULL ,`id` int NOT NULL  AUTO_INCREMENT,`question` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `db`.`Deck` (
`authorId` int  ,`description` varchar(191)   ,`id` int NOT NULL  AUTO_INCREMENT,`published` boolean NOT NULL DEFAULT false ,`title` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `db`.`User` (
`email` varchar(191) NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`name` varchar(191)   ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE  INDEX `authorId` ON `db`.`Deck`(`authorId`)

CREATE UNIQUE INDEX `User.email` ON `db`.`User`(`email`)

ALTER TABLE `db`.`Card` ADD FOREIGN KEY (`deckid`) REFERENCES `db`.`Deck`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `db`.`Deck` ADD FOREIGN KEY (`authorId`) REFERENCES `db`.`User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200621192852-deck..20200623221847-add-card
--- datamodel.dml
+++ datamodel.dml
@@ -1,27 +1,34 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
+generator client {
+  provider = "prisma-client-js"
+}
 datasource db {
   provider = "mysql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
-generator client {
-  provider = "prisma-client-js"
+model Card {
+  id Int @default(autoincrement()) @id
+  deckid Int
+  question String
+  answer String
+  Deck Deck @relation(fields: [deckid], references: [id])
 }
+model Deck {
+  authorId    Int?
+  description String?
+  id          Int     @default(autoincrement()) @id
+  published   Boolean @default(false)
+  title       String
+  User        User?   @relation(fields: [authorId], references: [id])
+
+  @@index([authorId], name: "authorId")
+}
+
 model User {
+  email String  @unique
   id    Int     @default(autoincrement()) @id
-  email String  @unique
   name  String?
-  authored_decks Deck[]
-}
-
-model Deck {
-  id        Int     @default(autoincrement()) @id
-  title     String
-  description   String?
-  published Boolean @default(false)
-  author    User?   @relation(fields: [authorId], references: [id])
-  authorId  Int?
+  authoredDecks  Deck[]
 }
```

