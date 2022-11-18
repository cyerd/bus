// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import  { Products } from "../../Data/data"

export default async function handler(req, res) {
  res.status(200).json({
    success: true,
    Products: Products,
  });
}

