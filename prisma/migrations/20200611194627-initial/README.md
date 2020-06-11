# Migration `20200611194627-initial`

This migration has been generated by Niko Noll at 6/11/2020, 7:46:27 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Deck" (
"description" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

CREATE TABLE "quaint"."Card" (
"answer" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"question" TEXT NOT NULL  ,"score" INTEGER NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200611194627-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Deck {
+  id Int @default(autoincrement()) @id
+  name String
+  description String
+}
+
+model Card {
+  id Int @default(autoincrement()) @id
+  question String
+  answer String
+  score Int
+}
```

