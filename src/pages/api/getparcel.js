// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { empty } from "@prisma/client/runtime";
import prisma from "../../../utils/prismaClient";

export default async function bookings(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }

  const parcelList = await prisma.parcels.findMany({
    where: {
      OR: [
        {
          receiver: { contains: req.query.receiver },
        },

        {
          receiver: { NOT: undefined },
        },
      ],
    },
  });

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )
  res.status(200).json({ parcelList });
}
