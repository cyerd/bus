import { TableCellsIcon } from "@heroicons/react/20/solid";
import { TableCell } from "@mui/material";
import React, { useState } from "react";

export default function Book(props) {
  const [destination, setDestination] = useState("--Destination");
  const [pickup, setPickup] = useState("--Pickup Point");


  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handlePickup = (e) => {
    setPickup(e.target.value);
  };
  const Destination = [
    {
      name: "--Destination",
    },
    { name: "BANGAL" },
    {
      name: "KANYONYO",
    },
    { name: "KITHIMANI" },
    {
      name: "KITHYOKA",
    },
    { name: "MATUU" },
    {
      name: "MWINGI",
    },
    { name: "NGUNI" },
    {
      name: "UKASI",
    },
    { name: "NAIROBI" },
  ];

  return (
    <div>
      <div className="flex items-center my-2">
        <p>Ticket Details</p>
        <input
          type="text"
          className="border border-purple-500 rounded p-1 mx-2"
          placeholder="Search Ticket/Booking"
        />
        <button className="bg-purple-600 text-white text-center px-2 py-1 rounded mx-1">
          Search
        </button>
      </div>
      <div>
        <span className="flex justify-around font-extrabold">
          <p>From *</p>
          <p>Destination</p>
          <p>Pickup Point</p>
          <p>Currency</p>
        </span>
        <span className="flex justify-around font-light italic">
          <p>{props.value}</p>
          <select
            className="w-48 border-2 py-1 px-3 rounded-lg justify-between mr-2"
            value={destination}
            onChange={handleDestination}
          >
            {Destination.map((place) => (
              <option key={place.name} value={place.name}>
                {place.name}
              </option>
            ))}
          </select>
          <select
            className="w-48 border-2 py-1 px-3 rounded-lg justify-between mr-2"
            value={pickup}
            onChange={handlePickup}
          >
            {Destination.map((place) => (
              <option key={place.name} value={place.name}>
                {place.name}
              </option>
            ))}
          </select>
          <select
            disabled
            className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
            value={pickup}
            onChange={handlePickup}
          >
            <option key="1" className="text-center " value="ksh">
              KES
            </option>
            <option key="2" className="text-center " value="usd">
              USD
            </option>
          </select>
        </span>
      </div>
      <div>
        <span className="flex text-center text-white bg-purple-400 mt-2 rounded-t-lg py-1 px-2">
          <TableCellsIcon className="mr-2" height="25" /> Passengers{" "}
        </span>
        <div>
          <span className="flex justify-around font-extrabold mt-2">
            <p>First Name*</p>
            <p>Last Name</p>
            <p>Mobile</p>
            <p>Age</p>
            <p>Gender</p>
            <p>Nationality</p>
            <p>ID</p>
          </span>
          <span className="flex justify-around ">
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Mobile"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Age"
            />
            <span className="flex items-center">
              <button className="flex items-center mx-1">
                <input className="text-center " type="radio" />
                <p className="mx-2">M</p>
              </button>
              <button className="flex items-center mx-1">
                <input className="text-center " type="radio" />
                <p className="mx-2">F</p>
              </button>
            </span>
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Nationality"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="ID"
            />
          </span>
        </div>
      </div>
      <div>
        <p> Luggage Present?</p>
        <select>
            <option value="No">NO</option>
        </select>
      </div>
          <span className="flex text-center text-white bg-purple-400 mt-2 rounded-t-lg py-1 px-2">
          <TableCellsIcon className="mr-2" height="25" /> Passengers{" "}
        </span>
        <div>
          <span className="flex justify-around font-extrabold mt-2">
            <p>Total Amount*</p>
            <p>Last Name</p>
            <p>Mobile</p>
            <p>Age</p>
            <p>Gender</p>
            <p>Nationality</p>
            <p>ID</p>
          </span>
          <span className="flex justify-around items-center">
            <p className="border py-1 text-sm border-gray-300">KES</p>
            <input
              type="text"
              className="border w-32 border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Total Amount"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Mobile"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Age"
            />
            <span className="flex items-center">
              <button className="flex items-center mx-1">
                <input className="text-center " type="radio" />
                <p className="mx-2">M</p>
              </button>
              <button className="flex items-center mx-1">
                <input className="text-center " type="radio" />
                <p className="mx-2">F</p>
              </button>
            </span>
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="Nationality"
            />
            <input
              type="text"
              className="border border-gray-300 text-center mt-2 rounded px-2"
              placeholder="ID"
            />
          </span>
        </div>
    </div>
  );
}
