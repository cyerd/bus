import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import Header from "../../components/Header";
import ViewsDatePicker from "../../components/Datepicker"

function schedule() {
  return (
    <div>
      <Header />
      <div className="m-2">
        <div className="border border-gray-200 p-5 w-full h-full">
          <div className="flex justify-start bg-gray-800 pt-1 rounded">
            <button className="ml-1 p-2 rounded text-lg bg-white">
              <Link className="mr-3" href="/schedule/dailyschedule">
                Daily schedule
              </Link>
            </button>
            <button className="mx-2 p-2 bg-gray-300 rounded text-lg active:bg-white">
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
                <div className="h-32">                  
                  <ViewsDatePicker />
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

export default schedule;
