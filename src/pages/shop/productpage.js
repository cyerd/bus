import React from "react";
import { products } from "../api/data/shop";

function Productpage() {
  return (
    <div className="flex flex-col  items-center justify-center ">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex  items-center justify-center flex-col w-fit border border-gray-300 rounded-lg px-5 bg-gray-300 my-2"
        >
          <div className="bg-black rounded-lg text-white px-5 py-2 mt-2 text-lg font-bold">
            {product.Item}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex px-2 w-full justify-between my-5 border border-gray-400 py-1 rounded-lg  bg-red-300  space-x-1 ">
              <p>Single</p>
              {product?.Single ? "Ksh " + product.Single : "N/A"}
            </div>
            <div className="flex px-2 w-full justify-between my-5 border border-gray-400 py-1 rounded-lg  bg-green-300  space-x-1 ">
              <p>Dozen</p>
              {product?.Dozen ? "Ksh " + product.Dozen : "N/A"}
            </div>
            <div className="flex px-2 w-full justify-between my-5 border border-gray-400 py-1 rounded-lg  bg-yellow-300  space-x-1 ">
              <p>Box</p>
              {product?.Box ? "Ksh " + product.Box.toLocaleString() : "N/A"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productpage;
