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
  
    console.log(req);

  try {
    await prisma.bookings.create({
      data: newBooking,
    });
    
    console.log(req.body);

    res.status(200).json({ booking: newBooking });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
