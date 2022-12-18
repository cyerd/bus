import { CalendarDaysIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../../components/Layouts/Header";
import ViewsDatePicker from "../../components/Datepicker";
import Head from "next/head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Tooltip } from "@material-tailwind/react";
import { format } from "date-fns";

function Routine() {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);

  const handleDate = (date) => setStartDate(date);

  return (
    <div>
  
      <Header />
      <div className="m-2">
        <div className="border border-gray-200 p-5 w-full h-full">
          <div className="flex justify-start  bg-gray-800   pt-1 rounded">
            <button className="ml-1 p-2 rounded text-lg bg-gray-300  ">
              <Link className="mr-3" href="/schedule/schedule">
                Daily schedule
              </Link>
            </button>
            <button className="mx-2 p-2  rounded text-lg bg-white">
              <Link href="/schedule/routetimetable">Route Timetable</Link>
            </button>
          </div>

          <div className=" w-full p-2 flex justify-center items-center text-red-900">
            <p>Total Active Trips : 4 ,</p>
            <p>Total Schedule Trips : 0 ,</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <p>Buses on: </p>
                <div className="border border-gray-400 flex rounded">
                  <DatePicker
                    className="ml-2"
                    selected={startDate}
                    onChange={handleDate}
                    dateFormat="dd/M/yyyy"
                  />
                  <Tooltip content="Reset Date">
                    <CalendarDaysIcon
                      variant="gradient"
                      onClick={() => setStartDate(new Date())}
                      height="20"
                      className="pr-1 "
                    />
                  </Tooltip>
                </div>
                <p>Promotional Trip</p>
              </div>
              <div className="flex px-2">
                <p>
                  From : <button>Garissa</button>
                </p>
                <p>Print Schedule</p>
                <p>Export Schedule</p>
              </div>
            </div>
            <div className="flex space-x-1 w-full">
              <button className="flex p-2 items-center justify-between px-5 w-auto   mt-3 bg-black text-white">
                <p>Bus</p>
                <ChevronUpDownIcon height="17" />
              </button>
              <button className="flex p-2 items-center justify-around px-5 w-auto  mt-3 bg-black text-white">
                <p>Bus Type</p>
                <ChevronUpDownIcon height="17" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routine;
