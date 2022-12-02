import prisma from "../../../../utils/prismaClient";


export default async function bookings(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }

  const { date: query, ...everything } = req.query;

  try {
    const bookings = await prisma.bookings.findMany({
      where: {
        startDate: query,
        trip: everything.trip,
      },
    });

     const reserves = await prisma.bookedSeats.findMany({
       where: {
         startDate: query,
         trip: everything.trip,
       },
     });

    const takenSeats = bookings.map((seat) => seat.seatNo);
    const reservedSeats = reserves.map((seat) => seat.seatNo);

    res.status(200).json({ takenSeats, bookings, reservedSeats });
  } catch (error) {
    res.status(500).json({ success: false, message: error, ...error });
  }
}
