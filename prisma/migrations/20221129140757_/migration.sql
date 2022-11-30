-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookedSeats" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "seats" TEXT NOT NULL
);
INSERT INTO "new_BookedSeats" ("date", "id", "seats") SELECT "date", "id", "seats" FROM "BookedSeats";
DROP TABLE "BookedSeats";
ALTER TABLE "new_BookedSeats" RENAME TO "BookedSeats";
CREATE UNIQUE INDEX "BookedSeats_id_key" ON "BookedSeats"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
