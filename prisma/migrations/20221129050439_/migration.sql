/*
  Warnings:

  - The primary key for the `Bookings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `totalPaid` on the `Bookings` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

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
    "luggage" INTEGER NOT NULL,
    "startDate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "trip" TEXT NOT NULL,
    "selectedSeats" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "discount" TEXT NOT NULL,
    "totalPaid" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "seatNo" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL
);
INSERT INTO "new_Bookings" ("age", "destination", "discount", "from", "fullName", "gender", "id", "idNumber", "luggage", "mobile", "nationality", "paymentMethod", "pickup", "seatNo", "selectedSeats", "startDate", "totalAmount", "totalPaid", "trip") SELECT "age", "destination", "discount", "from", "fullName", "gender", "id", "idNumber", "luggage", "mobile", "nationality", "paymentMethod", "pickup", "seatNo", "selectedSeats", "startDate", "totalAmount", "totalPaid", "trip" FROM "Bookings";
DROP TABLE "Bookings";
ALTER TABLE "new_Bookings" RENAME TO "Bookings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
