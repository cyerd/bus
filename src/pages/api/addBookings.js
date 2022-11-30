import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }
  const { booking } = req.body;

  const newBooking = {
    ...booking,
  };

  try {
    await prisma.bookings.create({
      data: newBooking,
    });

    const seatsBooked = newBooking.seatNo;
    const startDate = newBooking.startDate;
    const id = newBooking.id;
    console.log(seatsBooked, startDate, id);

    await prisma.bookedSeats.create({
      data: { id: id, seats: seatsBooked, date: startDate },
    });
    res.status(200).json({ booking: newBooking });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
