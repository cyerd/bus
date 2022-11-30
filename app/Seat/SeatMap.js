
import React, { useState } from "react";
import SeatIcon from "./SeatIcon";
import VipSeatIcon from "./VipSeatIcon";
import clsx from "clsx";
import { C, D, A, B, Staff, Trips, VIP } from "./SeatConstants";
import Staffseat from "./Staffseat";
import SeatMapLayout from "./SeatMapLayout";
import Trip from "./Trip";
import ShowCase from "./ShowCase";


export default function Seatmap() {


  return (
    <div className="flex flex-col items-center text-center">
      <Trip
        trip={selectedTrip}
        selectedSeats={selectedSeats}
        onChange={(trip) => {
          setSelectedSeats([]);
          setSelectedTrip(trip);
        }}
      />
      {/* <ShowCase /> */}

      
      <SeatMapLayout
        trip={selectedTrip}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) => {
          setSelectedSeats(selectedSeats);
        }}
      />

      <div className="flex flex-col mb-12">
        You have Selected
        <span className="text-sm text-green-500 font-bold px-2 m-2 bg-gray-200 border-2 border-green-200 rounded-xl">
          {selectedSeats.map((n) => n.name).join(", ")}
        </span>
        seats for the price of
        <span className="text-sm  ">
          {selectedSeats.forEach((subData) => (sum += subData.price))}

          <div className="flex justify-between ">
            <div className=" font-bold px-2 mx-2 bg-gray-200 border-2 border-red-200 rounded-xl">
              <p>Total Amount</p>
              <p className="bg-white px-5 rounded-lg">{sum}</p>
            </div>
            <div className="mx-2 flex flex-col text-red-500 font-bold px-2 items-center justify-center  border-2 border-red-200 rounded-xl">
              <p className="text-green-600">Dicount</p>
              <input
                className="w-20 text-center text-white bg-yellow-500 rounded-lg mb-2"
                type="text"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
            </div>

            <div className="text-red-500 font-bold px-2 mx-2 bg-gray-200 border-2 border-red-200 rounded-xl">
              <p>Total Paid</p>
              <p className=" text-white bg-teal-500 rounded-lg mb-2">
                {sum - currentValue}
              </p>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}






