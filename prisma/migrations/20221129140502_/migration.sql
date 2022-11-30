-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookedSeats" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    CONSTRAINT "BookedSeats_id_fkey" FOREIGN KEY ("id") REFERENCES "Bookings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BookedSeats" ("date", "id", "seats") SELECT "date", "id", "seats" FROM "BookedSeats";
DROP TABLE "BookedSeats";
ALTER TABLE "new_BookedSeats" RENAME TO "BookedSeats";
CREATE UNIQUE INDEX "BookedSeats_id_key" ON "BookedSeats"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
