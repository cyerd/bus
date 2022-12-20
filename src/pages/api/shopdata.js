// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { products } from "./data/shop";



export default async function handler(req, res) {
  res.status(200).json({
    success: true,
    Products: products,
  });
}


