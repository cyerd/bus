import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function bookings(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }

  const { date: query, ...everything } = req.query;

  const bookings = await prisma.bookings.findMany({
    where: {
      startDate: query,
      trip: everything.trip,
    },
  });

  const takenSeats = bookings.map((seat) => seat.seatNo);
  

  res.status(200).json({ takenSeats, bookings });
}
