import Image from "next/image";
import React from "react";

const navigation = [
  {
    id: "1",
    name: "Book",
    icon: "/book-ticket.png",
    color: "#94b104",
  },
  {
    id: "2",
    name: "Manifest",
    icon: "/Manifest.png",
    color: "#d3d803",
  },
  {
    id: "3",
    name: "Booking List",
    icon: "/booking-list.png",
    color: "#979797",
  },
  {
    id: "4",
    name: "Dispatch Bus",
    icon: "/Dispatch-bus.png",
    color: "#c9108c",
  },
];

function Tickets() {
  return (
    <div className="mx-2 border p-2 ">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Tickets</h1>
        <h3 className="italic">Book & manage Tickets</h3>
      </div>
      <div
        className="grid grid-cols-2  gap-x-2 md:grid-cols-4  xl:gap-x-4
        divide-x divide-green-700"
      >
        {navigation.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-around items-center p-0 sm:px-2 md:px-4 lg:px-6  max-h-32"
          >
            <Image src={item.icon} width="50" height="50" />
            <button
              style={{ backgroundColor: item.color }}
              className={`px-2 py-1 rounded-md  text-white my-5 `}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
