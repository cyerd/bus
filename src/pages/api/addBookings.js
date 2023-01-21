import prisma from "../../../utils/prismaClient";

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
    booking.forEach(async (element) => {
      await prisma.bookings.create({
        data: element,
      });
    });

    console.log("here", booking);

   await res.status(200).json({ booking: [...booking] });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
