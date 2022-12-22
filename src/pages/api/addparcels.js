import prisma from "../../../utils/prismaClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      body: "Method Not Allowed",
      message: req.body
    });
    return;
  }
  const { parcel } = req.body;


  const newParcel = {
    ...parcel,
  };
  try {
    await prisma.parcels.create({
      data: newParcel,
    });


    console.log(req.body);
    res.status(200).json({ parcel: newParcel });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
      error : "unknown",
      body: req.body
    });
  }
}
