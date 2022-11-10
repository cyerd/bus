import Image from "next/image";
import React, { useState } from "react";
import SeatIcon from "./SeatIcon";
import VipSeatIcon from "./VipSeatIcon";
import clsx from "clsx";

const vip = 1800;
const normal = 1500;

const VIP = [
  { name: "VIP1", price: vip },
  { name: "VIP2", price: vip },
  { name: "VIP3", price: vip },
];

const SectionB = [
  {
    name: "B1",
    price: normal,
  },
  {
    name: "B2",
    price: normal,
  },
  {
    name: "B3",
    price: normal,
  },
  {
    name: "B4",
    price: normal,
  },
  {
    name: "B5",
    price: normal,
  },
  {
    name: "B6",
    price: normal,
  },
  {
    name: "B7",
    price: normal,
  },
  {
    name: "B8",
    price: normal,
  },
  {
    name: "B9",
    price: normal,
  },
  {
    name: "B10",
    price: normal,
  },
  {
    name: "B11",
    price: normal,
  },
  {
    name: "B12",
    price: normal,
  },
  {
    name: "B13",
    price: normal,
  },
  {
    name: "B14",
    price: normal,
  },
  {
    name: "B15",
    price: normal,
  },
  {
    name: "B16",
    price: normal,
  },
  {
    name: "B17",
    price: normal,
  },
  {
    name: "B18",
    price: normal,
  },
  {
    name: "B19",
    price: normal,
  },
  {
    name: "B20",
    price: normal,
  },
  {
    name: "B21",
    price: normal,
  },
  {
    name: "B22",
    price: normal,
  },
  {
    name: "B23",
    price: normal,
  },
  {
    name: "B24",
    price: normal,
  },
];
const SectionA = [
  {
    name: "STAFF",
    price: normal,
  },
  {
    name: "A3",
    price: normal,
  },
  {
    name: "A4",
    price: normal,
  },
  {
    name: "A5",
    price: normal,
  },
  {
    name: "A6",
    price: normal,
  },
  {
    name: "A7",
    price: normal,
  },
  {
    name: "A8",
    price: normal,
  },
  {
    name: "A9",
    price: normal,
  },
  {
    name: "A10",
    price: normal,
  },
  {
    name: "A11",
    price: normal,
  },
  {
    name: "A12",
    price: normal,
  },
  {
    name: "A13",
    price: normal,
  },
  {
    name: "A14",
    price: normal,
  },
  {
    name: "A15",
    price: normal,
  },
  {
    name: "A16",
    price: normal,
  },
  {
    name: "A17",
    price: normal,
  },
];
const C = [{ name: "C" }];
const D = [{ name: "A1" }, { name: "A2" }];

const Trips = [
  {
    name: "6:30",
    price: [1800],
    Booked: ["A2", "STAFF", "VIP1", "B6", "B16"],
  },
  {
    name: "9:30",
    price: [1500],
    Booked: ["VIP1", "VIP2", "VIP3", "STAFF"],
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Seatmap() {
  const [selectedTrip, setSelectedTrip] = useState(Trips[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [price, setPrice] = useState(0);


  return (
    <div className="App">
      <Trip
        trip={selectedTrip}
        onChange={(trip) => {
          setSelectedSeats([]);
          setSelectedTrip(trip);
        }}
      />
      <ShowCase />
      <Cinema
        trip={selectedTrip}
        selectedSeats={selectedSeats}
        price={price}
        onSelectedSeatsChange={(selectedSeats, price) => {
          setSelectedSeats(selectedSeats);
          setPrice(price);
        }}
      />

      <div className="flex flex-col">
        You have Selected
        <span className="text-sm text-green-500 font-bold px-2 m-2 bg-gray-200 border-2 border-green-200 rounded-xl">
          {selectedSeats.join(" ")}
        </span>
        seats for the price of
        <span className="text-sm text-red-500 font-bold px-2 mx-2 bg-gray-200 border-2 border-red-200 rounded-xl">
         
          {selectedSeats
            .length ? "Ksh "+(selectedSeats.length * selectedTrip.price)
            .toLocaleString("en-US"): ""}
        </span>
      </div>
    </div>
  );
}

function Trip({ trip, onChange }) {
  return (
    <div className="Trip">
      <label htmlFor="movie">Select Trip: </label>
      <select
        className="bg-gray-300 px-3 mx-2 rounded border-2 border-gray-400 mb-2"
        id="trip"
        value={trip.name}
        onChange={(e) => {
          onChange(Trips.find((trip) => trip.name === e.target.value));
        }}
      >
        {Trips.map((trip) => (
          <option key={trip.name} value={trip.name}>
            {trip.name} (${trip.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="flex w-11/12 justify-around p-2 bg-gray-300 rounded-lg items-center">
      <li>
        <svg
          viewBox="0 0 50 50"
          xmlSpace="preserve"
          height={30}
          width={60}
          
        >
          <g
            fill="gray"
            strokeWidth={1}
            stroke="gray"
            strokeMiterlimit={10}
            
          >
            <path
              
              className="st0"
              d="M46.9,16.5c-1.4,0-2.5,1.1-2.5,2.4v16.6c-0.2,0.1-0.3,0.1-0.5,0.2c0,0-2.4,1.1-6.2,2.1
                c-1.2-0.8-2.7-1.2-4.3-0.9c-5.7,1.1-11.3,1.1-17,0c-1.5-0.3-3.1,0.1-4.2,0.9c-3.8-1-6.1-2.1-6.2-2.1c-0.1-0.1-0.3-0.1-0.4-0.2
                l0-16.6c0-1.3-1.1-2.4-2.5-2.4c-1.4,0-2.5,1.1-2.5,2.4v19.8c0,0.1,0,0.2,0,0.3c0.1,1.3,0.8,2.5,2.1,3.1c0.2,0.1,3.1,1.5,7.8,2.7
                c0.8,1.4,2.2,2.4,3.9,2.8c3.5,0.6,7,1,10.5,1c3.5,0,7.1-0.3,10.7-1c1.7-0.3,3.1-1.4,3.8-2.7c4.6-1.2,7.6-2.6,7.8-2.7
                c1.2-0.6,1.9-1.7,2.1-2.8c0.1-0.2,0.1-0.4,0.1-0.6l0-19.8C49.4,17.5,48.3,16.5,46.9,16.5L46.9,16.5z"
            />
          </g>
          <g
            fill="gray"
            strokeWidth={1.2}
            stroke="gray"
            strokeMiterlimit={10}
            
          >
            <path
              
              className="st1"
              d="M9.7,19.2l0,15c0.5,0.2,1,0.4,1.7,0.6c1.8-0.9,4-1.2,6-0.9c4.9,0.9,9.6,0.9,14.5,0c2.1-0.4,4.2-0.1,6.1,0.8
                c0.6-0.2,1.2-0.4,1.6-0.6l0-15c0-2.7,2-4.9,4.5-5.3l0-7.2c0-1.3-1-1.9-2.4-2.4c0,0-7.5-2.2-17-2.2c-9.5,0-17.3,2.2-17.3,2.2
                C6.1,4.8,5.1,5.4,5.1,6.7V14C7.7,14.3,9.7,16.5,9.7,19.2L9.7,19.2z"
            />
          </g>
        </svg>
        <p>Booked</p>
      </li>
      <li>
        <svg
          viewBox="0 0 50 50"
          xmlSpace="preserve"
          height={30}
          width={60}
          
        >
          <g
            fill="blue"
            strokeWidth={1}
            stroke="gray"
            strokeMiterlimit={10}
            
          >
            <path
              
              className="st0"
              d="M46.9,16.5c-1.4,0-2.5,1.1-2.5,2.4v16.6c-0.2,0.1-0.3,0.1-0.5,0.2c0,0-2.4,1.1-6.2,2.1
                c-1.2-0.8-2.7-1.2-4.3-0.9c-5.7,1.1-11.3,1.1-17,0c-1.5-0.3-3.1,0.1-4.2,0.9c-3.8-1-6.1-2.1-6.2-2.1c-0.1-0.1-0.3-0.1-0.4-0.2
                l0-16.6c0-1.3-1.1-2.4-2.5-2.4c-1.4,0-2.5,1.1-2.5,2.4v19.8c0,0.1,0,0.2,0,0.3c0.1,1.3,0.8,2.5,2.1,3.1c0.2,0.1,3.1,1.5,7.8,2.7
                c0.8,1.4,2.2,2.4,3.9,2.8c3.5,0.6,7,1,10.5,1c3.5,0,7.1-0.3,10.7-1c1.7-0.3,3.1-1.4,3.8-2.7c4.6-1.2,7.6-2.6,7.8-2.7
                c1.2-0.6,1.9-1.7,2.1-2.8c0.1-0.2,0.1-0.4,0.1-0.6l0-19.8C49.4,17.5,48.3,16.5,46.9,16.5L46.9,16.5z"
            />
          </g>
          <g
            fill="white"
            strokeWidth={1.2}
            stroke="gray"
            strokeMiterlimit={10}
            
          >
            <path
              
              className="st1"
              d="M9.7,19.2l0,15c0.5,0.2,1,0.4,1.7,0.6c1.8-0.9,4-1.2,6-0.9c4.9,0.9,9.6,0.9,14.5,0c2.1-0.4,4.2-0.1,6.1,0.8
                c0.6-0.2,1.2-0.4,1.6-0.6l0-15c0-2.7,2-4.9,4.5-5.3l0-7.2c0-1.3-1-1.9-2.4-2.4c0,0-7.5-2.2-17-2.2c-9.5,0-17.3,2.2-17.3,2.2
                C6.1,4.8,5.1,5.4,5.1,6.7V14C7.7,14.3,9.7,16.5,9.7,19.2L9.7,19.2z"
            />
          </g>
        </svg>
        <p>Available</p>
      </li>
      <li>
        <svg
          viewBox="0 0 50 50"
          xmlSpace="preserve"
          height={30}
          width={60}
          
        >
          <g
            fill="darkred"
            strokeWidth={1}
            stroke="gray"
            strokeMiterlimit={10}
            
          >
            <path
              
              className="st0"
              d="M46.9,16.5c-1.4,0-2.5,1.1-2.5,2.4v16.6c-0.2,0.1-0.3,0.1-0.5,0.2c0,0-2.4,1.1-6.2,2.1
                c-1.2-0.8-2.7-1.2-4.3-0.9c-5.7,1.1-11.3,1.1-17,0c-1.5-0.3-3.1,0.1-4.2,0.9c-3.8-1-6.1-2.1-6.2-2.1c-0.1-0.1-0.3-0.1-0.4-0.2
                l0-16.6c0-1.3-1.1-2.4-2.5-2.4c-1.4,0-2.5,1.1-2.5,2.4v19.8c0,0.1,0,0.2,0,0.3c0.1,1.3,0.8,2.5,2.1,3.1c0.2,0.1,3.1,1.5,7.8,2.7
                c0.8,1.4,2.2,2.4,3.9,2.8c3.5,0.6,7,1,10.5,1c3.5,0,7.1-0.3,10.7-1c1.7-0.3,3.1-1.4,3.8-2.7c4.6-1.2,7.6-2.6,7.8-2.7
                c1.2-0.6,1.9-1.7,2.1-2.8c0.1-0.2,0.1-0.4,0.1-0.6l0-19.8C49.4,17.5,48.3,16.5,46.9,16.5L46.9,16.5z"
            />
          </g>
          <g
            fill="darkred"
            strokeWidth={1.2}
            stroke="gray"
            strokeMiterlimit={10}
            
          >
            <path
              
              className="st1"
              d="M9.7,19.2l0,15c0.5,0.2,1,0.4,1.7,0.6c1.8-0.9,4-1.2,6-0.9c4.9,0.9,9.6,0.9,14.5,0c2.1-0.4,4.2-0.1,6.1,0.8
                c0.6-0.2,1.2-0.4,1.6-0.6l0-15c0-2.7,2-4.9,4.5-5.3l0-7.2c0-1.3-1-1.9-2.4-2.4c0,0-7.5-2.2-17-2.2c-9.5,0-17.3,2.2-17.3,2.2
                C6.1,4.8,5.1,5.4,5.1,6.7V14C7.7,14.3,9.7,16.5,9.7,19.2L9.7,19.2z"
            />
          </g>
        </svg>
        <p>Selected</p>
      </li>
    </ul>
  );
}

function Cinema({ trip, selectedSeats, onSelectedSeatsChange }) {
  const [isActive, setIsActive] = useState(false);
  // const handleClick = (e) => {
  //   setIsActive((e) => !e);
  // };

  function handleSelectedState(seat, price) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="flex justify-around w-full mt-2 relative ">
      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center ">
            {VIP.map((seat) => {
              const Booked = trip.Booked.includes(seat.name);

              const isSelected = selectedSeats.includes(seat.name);
              return (
                <button
                  key={seat.name}
                  className={clsx(
                    Booked ? "cursor-not-allowed" : "",
                    "relative flex"
                  )}
                  // onClick={handleClick}

                  onClick={
                    Booked
                      ? null
                      : () => handleSelectedState(seat.name, seat.price)
                  }
                  onKeyPress={
                    Booked
                      ? null
                      : (e) => {
                          if (e.key === "Enter") {
                            handleSelectedState(seat.name, seat.price);
                          }
                        }
                  }
                >
                  <VipSeatIcon Booked={Booked} name={seat.name} />
                </button>
              );
            })}
            <div className="flex mb-12">
              {D.map((seat) => {
                const Booked = trip.Booked.includes(seat.name);
                const isSelected = selectedSeats.includes(seat.name);
                const isOccupied = trip.Booked.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked
                        ? null
                        : () => handleSelectedState(seat.name, seat.price)
                    }
                    // onKeyPress={
                    //   Booked
                    //     ? null
                    //     : (e) => {
                    //         if (e.key === "Enter") {
                    //           handleSelectedState(seat.name);
                    //         }
                    //       }
                    // }
                  >
                    <SeatIcon Booked={Booked} name={seat.name} />
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-x-1">
              {SectionA.map((seat) => {
                const Booked = trip.Booked.includes(seat.name);
                const isSelected = selectedSeats.includes(seat.name);
                const isOccupied = trip.Booked.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked
                        ? null
                        : () => handleSelectedState(seat.name, seat.price)
                    }
                    // onKeyPress={
                    //   Booked
                    //     ? null
                    //     : (e) => {
                    //         if (e.key === "Enter") {
                    //           handleSelectedState(seat.name);
                    //         }
                    //       }
                    // }
                  >
                    <SeatIcon Booked={Booked} name={seat.name} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0">
        {C.map((seat) => {
          const Booked = trip.Booked.includes(seat.name);
          const isSelected = selectedSeats.includes(seat.name);
          const isOccupied = trip.Booked.includes(seat.name);
          return (
            <button
              key={seat.name}
              className={clsx(
                Booked ? "cursor-not-allowed" : "",
                "relative flex"
              )}
              onClick={
                Booked ? null : () => handleSelectedState(seat.name, seat.price)
              }
              onKeyPress={
                Booked
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat.name, seat.price);
                      }
                    }
              }
            >
              <SeatIcon Booked={Booked} name={seat.name} />
            </button>
          );
        })}
      </div>

      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center">
            <Image height={6} width={50} src="/driver.png" alt="driver" />
            <div className="grid grid-cols-2 gap-x-1">
              {SectionB.map((seat) => {
                const Booked = trip.Booked.includes(seat.name);
                const isSelected = selectedSeats.includes(seat.name);
                const isOccupied = trip.Booked.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    // onClick={!seat.Booked ? handleClick : alert("Already Selected") }
                    // onClick={
                    //   seat.Booked !== true ? handleClick : console.log("")
                    // }

                    onClick={
                      Booked ? null : () => handleSelectedState(seat.name)
                    }
                    // onKeyPress={
                    //   Booked
                    //     ? null
                    //     : (e) => {
                    //         if (e.key === "Enter") {
                    //           handleSelectedState(seat.name);
                    //         }
                    //       }
                    // }
                  >
                    <SeatIcon Booked={Booked} name={seat.name} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
