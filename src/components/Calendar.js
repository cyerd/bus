"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { Calendar as CL } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendar() {
  const [value, onChange] = useState(new Date());

  const [days, setDays] = useState(format(new Date(), "eeee"));
  const [date, setDate] = useState(format(new Date(), "d-M-y"));
  const [time, setTime] = useState(format(new Date(), "H:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      const day = format(new Date(), "eeee");
      setDays(day);
      const date = format(new Date(), "d-M-y");
      setDate(date);
      const time = format(new Date(), "H:mm:ss");
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="realative z-40 bg-white overflow-auto h-full mr-2 border-2 border-gray-300 rounded-lg p-2">
        <div className="flex items-center justify-between mx-4 mb-5 ">
          <div>
            <p className="font-bold text-4xl text-gray-500">{time}</p>
          </div>
          <div>
            <h2 className="font-bold text-3xl text-gray-500">{days}</h2>{" "}
            <p className="italic text-gray-500 text-lg">{date}</p>
          </div>
        </div>
        <div>
          <CL onChange={onChange} value={value} />
        </div>
      </div>
      <div className="flex flex-col h-32 w-full bg-gray-200 mr-2 p-2 border-2 border-gray-300 mt-3">
        <p className="border-b-2 border-blue-300 pb-2 text-xl">Schedule</p>
      </div>
      <div className="flex flex-col  w-full bg-gray-200 mr-2 p-2 border-2 border-gray-300 mt-3">
        <p className="border-b-2 border-blue-300 pb-2 text-xl">
          Recent Activities
        </p>
        <ul>
          <li>
            Logged in at{" "}
            <span className="italic">
              {" "}
              {format(new Date(2022, 9, 22, 9, 25, 15), "dd-MM-yyyy H:m:s")}
            </span>
          </li>
          <li>
            Booked ticket <span className="font-bold">T6GH902022E</span> at
            <span className="italic pl-2">
              {format(new Date(2022, 9, 22, 10, 25, 57), "dd-MM-yyyy H:m:s")}
            </span>
          </li>
          <li>
            Printed <span className="font-bold">Booking Manifest </span> at
            <span className="italic pl-2">
              {format(new Date(2022, 9, 22, 10, 45, 22), "dd-MM-yyyy H:m:s")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
