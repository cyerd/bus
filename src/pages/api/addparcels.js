import prisma from "../../../utils/prismaClient";

export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     res.status(405).json({
//       body: "Method Not Allowed",
//     });
//     return;
//   }
  const { parcel } = req.body;
  console.log("query body", parcel)

  const newParcel = {
    ...parcel,
  };
  try {
    await prisma.parcels.create({
      data: newParcel,
    });
    console.log(newParcel, "new dat5a");

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
