/*
  Warnings:

  - Added the required column `startDate` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bookings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "luggage" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "trip" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "discount" TEXT NOT NULL,
    "totalPaid" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "seatNo" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL
);
INSERT INTO "new_Bookings" ("age", "destination", "discount", "from", "fullName", "gender", "id", "idNumber", "luggage", "mobile", "nationality", "paymentMethod", "pickup", "seatNo", "totalAmount", "totalPaid", "trip") SELECT "age", "destination", "discount", "from", "fullName", "gender", "id", "idNumber", "luggage", "mobile", "nationality", "paymentMethod", "pickup", "seatNo", "totalAmount", "totalPaid", "trip" FROM "Bookings";
DROP TABLE "Bookings";
ALTER TABLE "new_Bookings" RENAME TO "Bookings";
CREATE UNIQUE INDEX "Bookings_seatNo_key" ON "Bookings"("seatNo");
CREATE TABLE "new_BookedSeats" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    CONSTRAINT "BookedSeats_seats_fkey" FOREIGN KEY ("seats") REFERENCES "Bookings" ("seatNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BookedSeats" ("date", "id", "seats") SELECT "date", "id", "seats" FROM "BookedSeats";
DROP TABLE "BookedSeats";
ALTER TABLE "new_BookedSeats" RENAME TO "BookedSeats";
CREATE UNIQUE INDEX "BookedSeats_id_key" ON "BookedSeats"("id");
CREATE UNIQUE INDEX "BookedSeats_date_key" ON "BookedSeats"("date");
CREATE UNIQUE INDEX "BookedSeats_seats_key" ON "BookedSeats"("seats");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
