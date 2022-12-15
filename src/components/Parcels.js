"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = [
  {
    id: "1",
    name: "Book",
    icon: "/book-parcel.png",
    color: "#c50b09",
    href: "/parcel/addparcel",
  },
  {
    id: "2",
    name: "Loading Sheet",
    icon: "/loading sheet.png",
    color: "#c50b09",
    href: "/parcel/loadingsheet",
  },
  {
    id: "3",
    name: "Parcel List",
    icon: "/parcel-list.png",
    color: "#c50b09",
    href: "/parcel/parcelist",
  },
];

function Parcels() {
  return (
    <div className="mx-2 border p-2  bg-#ff00ff-200 rounded-lg rounded border-2 border-gray-400 mt-2">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Parcel</h1>
        <h3 className="italic">Book & manage Parcel</h3>
      </div>
      <div className="grid grid-cols-2 gap-y-3   gap-x-4 md:grid-cols-3  ">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="flex flex-col justify-between items-center py-5 overflow-auto"
          >
            <button
              style={{ backgroundColor: item.color }}
              className={`rounded-md text-white flex justify-around  px-5 py-2 h-full w-full items-center`}
            >
              <p> {item.name}</p>
              <Image src={item.icon} width="30" height="30" alt="menu" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Parcels;
