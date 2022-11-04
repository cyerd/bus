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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
           
                <SeatIcon name={seat.name} />
              </button>
            ))}
          </div>
          <div>
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
        </div>

        {/* B section */}
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
          <div>
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
        </div>
      </div>
      {/* middle seat C */}
      <div className="ml-3 absolute bottom-0">
             <button
                key="C"
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name="C" />
              </button>
            
      </div>

      <div>
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
          <div>
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="px-3">
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
          <div>
            {seats.map((seat) => (
                <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
           
                <SeatIcon name={seat.name} />
              </button>
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
