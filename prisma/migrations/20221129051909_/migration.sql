/*
  Warnings:

  - You are about to drop the column `selectedSeats` on the `Bookings` table. All the data in the column will be lost.

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
INSERT INTO "new_Bookings" ("age", "destination", "discount", "from", "fullName", "gender", "id", "idNumber", "luggage", "mobile", "nationality", "paymentMethod", "pickup", "seatNo", "startDate", "totalAmount", "totalPaid", "trip") SELECT "age", "destination", "discount", "from", "fullName", "gender", "id", "idNumber", "luggage", "mobile", "nationality", "paymentMethod", "pickup", "seatNo", "startDate", "totalAmount", "totalPaid", "trip" FROM "Bookings";
DROP TABLE "Bookings";
ALTER TABLE "new_Bookings" RENAME TO "Bookings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
