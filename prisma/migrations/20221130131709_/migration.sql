-- CreateTable
CREATE TABLE "bookings" (
    "_id" TEXT NOT NULL PRIMARY KEY,
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

-- CreateTable
CREATE TABLE "bookedSeats" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "seats" TEXT NOT NULL
);
