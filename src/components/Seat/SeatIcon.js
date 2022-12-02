import { LockClosedIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

export default function SeatIcon({ name, Booked, Locked, trip }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const color = !Locked && isActive ? "darkred" : "white";
  const next = !Locked && isActive ? "darkred" : "blue";

    useEffect(() => {
      setIsActive(false);
    }, [trip]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className="relative text-center items-center"
      onClick={handleClick}
      value={name}
    >
      <p
        className={classNames(
          !Booked && !Locked && isActive ? " text-white" : "text-gray-800",
          "absolute left-5 font-bold text-[11px]  top-1"
        )}
        value={name}
      >
        {name}
      </p>
      <LockClosedIcon
        className={classNames(
          !Locked ? "  hidden" : "visible",
          "absolute left-0 font-bold text-[11px]  -top-2"
        )}
        value={name}
        height={30}
        width={25}
      />

      <svg
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        height={50}
        width={60}
        value={name}
      >
        <g
          fill={Booked ? "gray" : next}
          strokeWidth={1}
          stroke="gray"
          strokeMiterlimit={10}
          value={name}
        >
          <path
            value={name}
            className="st0"
            d="M46.9,16.5c-1.4,0-2.5,1.1-2.5,2.4v16.6c-0.2,0.1-0.3,0.1-0.5,0.2c0,0-2.4,1.1-6.2,2.1
                c-1.2-0.8-2.7-1.2-4.3-0.9c-5.7,1.1-11.3,1.1-17,0c-1.5-0.3-3.1,0.1-4.2,0.9c-3.8-1-6.1-2.1-6.2-2.1c-0.1-0.1-0.3-0.1-0.4-0.2
                l0-16.6c0-1.3-1.1-2.4-2.5-2.4c-1.4,0-2.5,1.1-2.5,2.4v19.8c0,0.1,0,0.2,0,0.3c0.1,1.3,0.8,2.5,2.1,3.1c0.2,0.1,3.1,1.5,7.8,2.7
                c0.8,1.4,2.2,2.4,3.9,2.8c3.5,0.6,7,1,10.5,1c3.5,0,7.1-0.3,10.7-1c1.7-0.3,3.1-1.4,3.8-2.7c4.6-1.2,7.6-2.6,7.8-2.7
                c1.2-0.6,1.9-1.7,2.1-2.8c0.1-0.2,0.1-0.4,0.1-0.6l0-19.8C49.4,17.5,48.3,16.5,46.9,16.5L46.9,16.5z"
          />
        </g>
        <g
          fill={Booked ? "gray" : color}
          strokeWidth={1.2}
          stroke="gray"
          strokeMiterlimit={10}
          value={name}
        >
          <path
            value={name}
            className="st1"
            d="M9.7,19.2l0,15c0.5,0.2,1,0.4,1.7,0.6c1.8-0.9,4-1.2,6-0.9c4.9,0.9,9.6,0.9,14.5,0c2.1-0.4,4.2-0.1,6.1,0.8
                c0.6-0.2,1.2-0.4,1.6-0.6l0-15c0-2.7,2-4.9,4.5-5.3l0-7.2c0-1.3-1-1.9-2.4-2.4c0,0-7.5-2.2-17-2.2c-9.5,0-17.3,2.2-17.3,2.2
                C6.1,4.8,5.1,5.4,5.1,6.7V14C7.7,14.3,9.7,16.5,9.7,19.2L9.7,19.2z"
          />
        </g>
      </svg>
    </div>
  );
}
