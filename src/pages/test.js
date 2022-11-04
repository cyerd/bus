import Image from "next/image";
import React from "react";
import SeatIcon from "../components/SeatIcon";
import SeatMap from "../components/SeatMap";

const seats = [
  { name: "VIP1" },
  { name: "VIP2" },
  { name: "VIP3" },
  { name: "A1" },
  { name: "A2" },
  { name: "A3" },
];

export default function test() {
  return (
    <div className="m-5 flex justify-between w-full">
      {seats.map((seat) => (
        <SeatIcon />
      ))}
    </div>
  );
}
