/*
  Warnings:

  - The primary key for the `Bookings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AGE` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `DESTINATION` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `DISCOUNT` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `FULLNAME` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `GENDER` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `LUGGAGE` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `MOBILE` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `NATIONALITY` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `PAIDAMOUNT` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `PAYMENTMETHOD` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `PICKUP` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `PLACE` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `SEAT` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `TOTALAMOUNT` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `TRAVELDATE` on the `Bookings` table. All the data in the column will be lost.
  - You are about to drop the column `TRIP` on the `Bookings` table. All the data in the column will be lost.
  - Added the required column `age` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idNumber` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `luggage` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethod` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickup` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatNo` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selectedSeats` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPaid` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trip` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bookings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "from" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "luggage" INTEGER NOT NULL,
    "startDate" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "trip" TEXT NOT NULL,
    "selectedSeats" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "totalPaid" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "seatNo" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL
);
DROP TABLE "Bookings";
ALTER TABLE "new_Bookings" RENAME TO "Bookings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
