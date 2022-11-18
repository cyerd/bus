import { TableCellsIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

import {sum} from "../components/Seat/SeatMap"

export default function Book(props) {
  const [destination, setDestination] = useState("--Destination");
  const [pickup, setPickup] = useState("--Pickup Point");

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const [gender, setgender] = useState();

  const handlegender = (e) => {
    setgender(e.target.value);
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
      <div className="flex items-center my-2 bg-gray-200 p-2">
        <p>Ticket Details</p>
        <input
          type="text"
          className="border-2 border-purple-500 rounded p-1 mx-2"
          placeholder="Search Ticket/Booking"
        />
        <button className="bg-purple-600 text-white text-center px-2 py-1 rounded mx-1">
          Search
        </button>
      </div>
      <div className="w-full flex flex-1 bg-teal-100 py-5">
        <form className="flex flex-col lg:flex-row mx-2 ">
          <div className="flex flex-col mx-4">
            <lable className="font-bold my-2">From</lable>
            <input
              disabled
              type="text"
              value={props.value}
              className="bg-transparent outline-0 disabled"
            />
          </div>
          <div className="flex flex-col mx-4">
            <lable className="font-bold my-2">Destination</lable>

            <select
              className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
              value={destination}
              onChange={handleDestination}
            >
              {Destination.map((place) => (
                <option key={place.name} value={place.name}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mx-4">
            <lable className="font-bold my-2">Pickup Point</lable>

            <select
              className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
              value={pickup}
              onChange={handlePickup}
            >
              {Destination.map((place) => (
                <option key={place.name} value={place.name}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mx-4">
            <lable className="font-bold my-2">Currency</lable>

            <select
              disabled
              className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
              value={pickup}
              onChange={handlePickup}
            >
              <option key="1" className="text-center " value="ksh">
                Kenyan Shilling
              </option>
              <option key="2" className="text-center " value="usd">
                USD
              </option>
            </select>
          </div>
        </form>
      </div>
      <div className="bg-orange-200">
        <span className="flex text-center text-white bg-purple-400 mt-2 rounded-t-lg py-1 px-2">
          <TableCellsIcon className="mr-2" height="25" /> Passengers
        </span>
        <div>
          <form className="flex flex-col lg:flex-row mx-2 overflow-auto text-xs py-5">
            <div className="flex flex-col mx-1 ">
              <lable className="font-bold my-2 ">First Name</lable>
              <input
                className="border-2 border-gray-300 rounded px-1 py-2"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="flex flex-col mx-1">
              <lable className="font-bold my-2">Last Name</lable>
              <input
                className="border-2 border-gray-300 rounded px-1 py-2"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="flex flex-col mx-1">
              <lable className="font-bold my-2">Mobile</lable>
              <span className="flex bg-gray-100 ">
                <select className="border border-gray-300 bg-gray-200 font-bold  py-2">
                  <option>+254</option>
                </select>
                <input
                  className="border-2 border-gray-300 rounded px-1 py-2 "
                  placeholder="Mobile"
                  type="text"
                />
              </span>
            </div>
            <div className="flex flex-col mx-1">
              <lable className="font-bold my-2">Age</lable>
              <input
                className="border-2 border-gray-300 rounded px-1 py-2"
                placeholder="Age"
                type="text"
              />
            </div>
            <div className="flex flex-col  mx-1">
              <lable className="font-bold my-2">Gender</lable>
              <div className="flex flex-col lg:flex-row pt-3">
                <span className="flex">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handlegender}
                  />
                  <p className="pl-1">M</p>
                </span>
                <span className="flex lg:ml-1">
                  <input
                    className=""
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handlegender}
                  />
                  <p className="pl-1">F</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col mx-1">
              <lable className="font-bold my-2">Nationality</lable>
              <input
                className="border-2 border-gray-300 rounded px-1 py-2"
                placeholder="Nationality"
                type="text"
              />
            </div>
            <div className="flex flex-col mx-1">
              <lable className="font-bold my-2">ID</lable>
              <input
                className="border-2 border-gray-300 rounded px-1 py-2 "
                placeholder="ID No."
                type="text"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Luggage Section */}
      <div className="my-5">
        <p> Luggage Present?</p>
        <select className="text-sm mx-3 my-2 py-1 px-2 bg-blue-300 rounded px-2">
          <option className="bg-gray-100" value="No">
            NO
          </option>
          <option className="bg-blue-100" value="YES">
            YES
          </option>
        </select>
      </div>

      {/* Payment Details section  */}
      <span className="flex text-center text-white bg-purple-400 mt-2 rounded-t-lg py-1 px-2 ">
        <TableCellsIcon className="mr-2" height="25" /> Payment{" "}
      </span>

      <div>
        <form className="flex flex-col lg:flex-row mx-2 text-sm ">
          <div className="flex flex-col mx-1">
            <lable className="font-bold my-2 ">Total Amount</lable>
            <div className="flex bg-gray-100 ">
              <p className="border-2 border-gray-300 text-lg px-1">KES</p>
              <input className="border-2 border-gray-300" type="text" />
            </div>
          </div>
          <div className="flex flex-col mx-1">
            <lable className="font-bold my-2 ">Discount</lable>
            <div className="flex bg-gray-100 ">
              <p className="border-2 border-gray-300 text-lg px-1">KES</p>
              <input className="border-2 border-gray-300" value={sum} type="text" />
            </div>
          </div>
          <div className="flex flex-col mx-1">
            <lable className="font-bold my-2 ">Total Paid</lable>
            <div className="flex bg-gray-100 ">
              <p className="border-2 border-gray-300 text-lg px-1">KES</p>
              <input className="border-2 border-gray-300" type="text" />
            </div>
          </div>
          <div className="flex flex-col mx-1 ">
            <lable className="font-bold my-2 ">Payment Method</lable>
            <select className="border-2 w-32 lg:w-full border-gray-300 px-1 text-lg text-center">
              <option>Cash</option>
              <option>Mpesa</option>
            </select>
          </div>
        </form>
      </div>

      {/* Voucher Section */}
      <div className="flex flex-col lg:flex-row mt-10 overflow-auto">
        <span className="ml-2 my-2 lg:my-0">
          <input
            className="border-2 border-gray-300  p-1"
            type="text"
            placeholder="Note"
          />
          <p className="text-blue-300 font-bold">Max 60 Characters</p>
        </span>
        <span className="ml-2 my-2 lg:my-0">
          <input
            className="border-2 border-gray-300 p-1"
            type="text"
            placeholder="Voucher Code"
          />
          <p className="text-blue-300 font-bold">
            Type / Paste voucher code and press enter.
          </p>
        </span>
        <span className="flex my-2 lg:my-0">
          <button className="mx-2 px-2 py-1 mb-6 rounded bg-gray-800 text-white text-center ">
            Apply Voucher
          </button>
          <a href="" className="text-blue-300 underline">
            Want to get a Voucher?
          </a>
        </span>
      </div>

      {/* bottom three buttons */}
      <div className="flex justify-end flex-col  lg:flex-row mt-32 mb-10 text-lg mx-20 lg:mx-5">
        <button className=" px-2 py-1 rounded mx-1 border border-gray-400 my-2 lg:my-0">
          Reset
        </button>
        <button className="bg-gray-800 text-white px-2 py-1 rounded mx-1 border border-gray-300 my-2 lg:my-0">
          Book
        </button>
        <book className="bg-red-500 text-white px-2 py-1 rounded mx-1 text-center border border-gray-300 my-2 lg:my-0">
          Reserve Seat
        </book>
      </div>
    </div>
  );
}
