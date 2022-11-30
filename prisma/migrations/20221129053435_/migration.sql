/*
  Warnings:

  - You are about to drop the column `seat` on the `BookedSeats` table. All the data in the column will be lost.
  - Added the required column `name` to the `BookedSeats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `BookedSeats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookedSeats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_BookedSeats" ("id") SELECT "id" FROM "BookedSeats";
DROP TABLE "BookedSeats";
ALTER TABLE "new_BookedSeats" RENAME TO "BookedSeats";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
