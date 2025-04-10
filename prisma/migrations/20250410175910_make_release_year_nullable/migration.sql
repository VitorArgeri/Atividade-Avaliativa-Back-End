-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "releaseYear" INTEGER,
    "developer" TEXT NOT NULL,
    "genres" TEXT,
    "platforms" TEXT,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_games" ("createdAt", "developer", "genres", "id", "imageUrl", "platforms", "price", "releaseYear", "title", "updatedAt") SELECT "createdAt", "developer", "genres", "id", "imageUrl", "platforms", "price", "releaseYear", "title", "updatedAt" FROM "games";
DROP TABLE "games";
ALTER TABLE "new_games" RENAME TO "games";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
