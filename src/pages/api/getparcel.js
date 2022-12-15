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

  console.log(req.body);

  res.status(200).json({ parcelList });
}
