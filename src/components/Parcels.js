import Image from "next/image";
import React from "react";

const navigation = [
  {
    id: "1",
    name: "Book",
    icon: "/book-parcel.png",
    color: "#c50b09",
  },
  {
    id: "2",
    name: "Loading Sheet",
    icon: "/loading sheet.png",
    color: "#c50b09",
  },
  {
    id: "3",
    name: "Parcel List",
    icon: "/parcel-list.png",
    color: "#c50b09",
  },
];

function Parcels() {
  return (
    <div className="mx-2 border p-2  bg-pink-200 ">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Parcel</h1>
        <h3 className="italic">Book & manage Parcel</h3>
      </div>
      <div className="grid grid-cols-2 gap-y-4   gap-x-4 md:grid-cols-3  ">
        {navigation.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between items-center py-5"
          >
            <div
              style={{ backgroundColor: item.color }}
              className={`rounded-md text-white flex justify-around mx-5 px-5 py-2 h-full w-full items-center`}
            >
              <p> {item.name}</p>
              <Image src={item.icon} width="30" height="30" layout="fixed" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parcels;
