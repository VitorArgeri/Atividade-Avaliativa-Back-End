/*
  Warnings:

  - You are about to drop the column `imageURL` on the `games` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "developer" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "platforms" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_games" ("createdAt", "developer", "genres", "id", "platforms", "price", "releaseYear", "title", "updatedAt") SELECT "createdAt", "developer", "genres", "id", "platforms", "price", "releaseYear", "title", "updatedAt" FROM "games";
DROP TABLE "games";
ALTER TABLE "new_games" RENAME TO "games";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
