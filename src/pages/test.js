import Image from "next/image";
import React, { useState } from "react";
import SeatIcon from "../components/SeatIcon";
import VipSeatIcon from "../components/VipSeatIcon";

const VIP = [{ name: "VIP1" }, { name: "VIP2" }, { name: "VIP3" }];

const SectionB = [
  {
    name: "B1",
  },
  {
    name: "B2",
  },
  {
    name: "B3",
  },
  {
    name: "B4",
  },
  {
    name: "B5",
  },
  {
    name: "B6",
  },
  {
    name: "B7",
  },
  {
    name: "B8",
  },
  {
    name: "B9",
  },
  {
    name: "B10",
  },
  {
    name: "B11",
  },
  {
    name: "B12",
  },
  {
    name: "B13",
  },
  {
    name: "B14",
  },
  {
    name: "B15",
  },
  {
    name: "B16",
  },
  {
    name: "B17",
  },
  {
    name: "B18",
  },
  {
    name: "B19",
  },
  {
    name: "B20",
  },
  {
    name: "B21",
  },
  {
    name: "B22",
  },
  {
    name: "B23",
  },
  {
    name: "B24",
  },
];
const SectionA = [
  {
    name: "STAFF",
  },
  {
    name: "A3",
  },
  {
    name: "A4",
  },
  {
    name: "A5",
  },
  {
    name: "A6",
  },
  {
    name: "A7",
  },
  {
    name: "A8",
  },
  {
    name: "A9",
  },
  {
    name: "A10",
  },
  {
    name: "A11",
  },
  {
    name: "A12",
  },
  {
    name: "A13",
  },
  {
    name: "A14",
  },
  {
    name: "A15",
  },
  {
    name: "A16",
  },
  {
    name: "A17",
  },

];

export default function test() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="flex justify-around w-full mt-2 relative">
      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center">
            {VIP.map((seat) => (
              <button
                key={seat.name}
                className="relative flex"
                onClick={handleClick}
              >
                <VipSeatIcon name={seat.name} />
              </button>
            ))}
            <div className="flex mb-12">
              <button key="A1" className="relative flex" onClick={handleClick}>
                <SeatIcon name="A1" />
              </button>
              <button key="A2" className="relative flex" onClick={handleClick}>
                <SeatIcon name="A2" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-1">
              {SectionA.map((seat) => (
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
      <div className="ml-3 absolute bottom-0">
        <button
          value="C"
          key="C"
          className="relative flex"
          onClick={handleClick}
        >
          <SeatIcon name="C" />
        </button>
      </div>
      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center">
            <Image height={50} width={50} src="/driver.png" alt="driver" />
            <div className="grid grid-cols-2 gap-x-1">
              {SectionB.map((seat) => (
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
    </div>
  );
}
