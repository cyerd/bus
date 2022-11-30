

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function bookings(req, res) {

  
  if (req.method !== "GET") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }

  const bookings = await prisma.bookedSeats.findMany({});
  const seats = bookings.map((seat) => seat.seats);
  res.status(200).json({ bookings, seats });
}
