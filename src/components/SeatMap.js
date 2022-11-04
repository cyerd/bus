import Image from "next/image";
import React, { useState } from "react";
import SeatIcon from "./SeatIcon";

const seats = [
  { name: "VIP1" },
  { name: "VIP2" },
  { name: "VIP3" },
  { name: "A1" },
  { name: "A2" },
  { name: "A3" },
];

export default function SeatMap() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="flex justify-around w-full mt-2 relative">
      <div>
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
              <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
                <p
                
                  className="absolute left-3 font-bold text-xs top-2 "
                >
                  {seat.name}
                </p>
                <SeatIcon />
              </button>
            ))}
          </div>
          <div>
            {seats.map((seat) => (
              <span key={seat.name} className="relative bg-red-500">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon />
              </span>
            ))}
          </div>
        </div>

        {/* B section */}
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
              <span key={seat.name} className="relative">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon toggle />
              </span>
            ))}
          </div>
          <div>
            {seats.map((seat) => (
              <span key={seat.name} className="relative">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon toggle />
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* middle seat C */}
      <div className="ml-3 absolute bottom-0">
        <span className="">
          <p className="absolute left-3 font-bold text-xs top-2 ">C</p>
          <SeatIcon toggle />
        </span>
      </div>

      <div>
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
              <span key={seat.name} className="relative">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon toggle />
              </span>
            ))}
          </div>
          <div>
            {seats.map((seat) => (
              <span key={seat.name} className="relative">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon toggle />
              </span>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
              <span key={seat.name} className="relative">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon toggle />
              </span>
            ))}
          </div>
          <div>
            {seats.map((seat) => (
              <span key={seat.name} className="relative">
                <p className="absolute left-3 font-bold text-xs top-2 ">
                  {seat.name}
                </p>
                <SeatIcon toggle />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
