# Migration `20200625132458-typo-in-cards-deckid-field`

This migration has been generated by Niko Noll at 6/25/2020, 1:24:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `db`.`Card` DROP FOREIGN KEY `Card_ibfk_1`,
DROP COLUMN `deckid`,
ADD COLUMN `deckId` int NOT NULL ;

ALTER TABLE `db`.`Card` ADD FOREIGN KEY (`deckId`) REFERENCES `db`.`Deck`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200623221847-add-card..20200625132458-typo-in-cards-deckid-field
--- datamodel.dml
+++ datamodel.dml
@@ -3,17 +3,17 @@
 }
 datasource db {
   provider = "mysql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model Card {
   id Int @default(autoincrement()) @id
-  deckid Int
+  deckId Int
   question String
   answer String
-  Deck Deck @relation(fields: [deckid], references: [id])
+  Deck Deck @relation(fields: [deckId], references: [id])
 }
 model Deck {
   authorId    Int?
```


