import { EyeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import ManifestModal from "./manifestModal";
import { Trips } from "./SeatConstants";

export default function Trip({ trip, onChange }) {

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="grid grid-flow-col bg-black text-white font-bold w-full p-1">
        <div className="">ROUTE</div>
        <div className="">FLEET</div>
        <div className="">SERIES</div>
        <div className=" ">DEPATURE</div>
        <div className=" ">TO</div>
        <div className=" ">COST</div>
        <div className="">MANIFEST</div>
      </div>

      {Trips.map((trip) => (
        <div key={trip.name} className="grid grid-flow-col w-full lg:-ml-10 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              onChange(
                Trips.find((trip) => trip.name === e.currentTarget.value)
              );
            }}
            key={trip.name}
            value={trip.name}
            className="grid grid-flow-col   hover:bg-pink-100 focus:bg-pink-300 py-2 "
          >
            <div className=" ">{trip.Route}</div>
            <div className="">44 Seater</div>
            <div className="">{trip.series}</div>
            <div className=" ">{trip.name}</div>
            <div className="">NAIROBI</div>
            <div className=" ">
              <button className=" border border-red-400 px-1">1500</button>
              <button className="mx-2 border border-red-400 px-1">1800</button>
            </div>

            <button
              key={trip.name}
              onClick={() => setOpen(true)}
              className="flex justify-around items-center text-center text-white bg-purple-600  rounded-lg"
            >
              <p className="text-center">View</p> <EyeIcon height={20} />{" "}
            </button>
          </button>
        </div>
      ))}
      <ManifestModal setOpen={setOpen} open={open} />
    </div>
  );
}
