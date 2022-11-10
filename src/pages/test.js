/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */


import React, { useState } from "react";
import clsx from "clsx";
import VipSeatIcon from "../components/VipSeatIcon";
import SeatIcon from "../components/SeatIcon";
import Image from "next/image";

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
    price: [1000,],
    Booked: ["A9", "STAFF", "VIP3", "B8"],
  },
];


const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function App() {
  const [selectedTrip, setSelectedTrip] = useState(Trips[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);


  return (
    <div className="App">
      <Movies
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
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info">
        You have selected{" "}
        <span className="text-sm text-green-500 font-bold px-2 m-2 bg-gray-200 border-2 border-green-200 rounded-xl">
          {selectedSeats.join(", ")}{" "}
        </span>{" "}
        seats for the price of
        <span className="text-sm text-red-500 font-bold px-2 mx-2 bg-gray-200 border-2 border-red-200 rounded-xl">
          Ksh {(selectedSeats.length * selectedTrip.price).toLocaleString("en-US")}
        </span>
      </p>
    </div>
  );
}

function Movies({ trip, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
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
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ trip, selectedSeats, onSelectedSeatsChange }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    setIsActive((e) => !e);
  };

  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      handleClick()
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
              const selected = trip.Booked.includes(seat.name);

              const isSelected = selectedSeats.includes(seat.name);
              return (
                <button
                  key={seat.name}
                  className={clsx(
                    selected ? "cursor-not-allowed" : "",
                    "relative flex"
                  )}
                  // onClick={handleClick}

                  onClick={
                    selected ? null : () => handleSelectedState(seat.name)
                  }
                  onKeyPress={
                    selected
                      ? null
                      : (e) => {
                          if (e.key === "Enter") {
                            handleSelectedState(seat.name);
                          }
                        }
                  }
                >
                  <VipSeatIcon selected={selected} name={seat.name} />
                </button>
              );
            })}
            <div className="flex mb-12">
              {D.map((seat) => {
                const selected = trip.Booked.includes(seat.name);
                const isSelected = selectedSeats.includes(seat.name);
                const isOccupied = trip.Booked.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      selected ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      selected ? null : () => handleSelectedState(seat.name)
                    }
                    onKeyPress={
                      selected
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat.name);
                            }
                          }
                    }
                  >
                    <SeatIcon selected={selected} name={seat.name} />
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-x-1">
              {SectionA.map((seat) => {
                const selected = trip.Booked.includes(seat.name);
                const isSelected = selectedSeats.includes(seat.name);
                const isOccupied = trip.Booked.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      selected ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      selected ? null : () => handleSelectedState(seat.name)
                    }
                    onKeyPress={
                      selected
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat.name);
                            }
                          }
                    }
                  >
                    <SeatIcon selected={selected} name={seat.name} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0">
        {C.map((seat) => {
          const selected = trip.Booked.includes(seat.name);
          const isSelected = selectedSeats.includes(seat.name);
          const isOccupied = trip.Booked.includes(seat.name);
          return (
            <button
              key={seat.name}
              className={clsx(
                selected ? "cursor-not-allowed" : "",
                "relative flex"
              )}
              onClick={selected ? null : () => handleSelectedState(seat.name)}
              onKeyPress={
                selected
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat.name);
                      }
                    }
              }
            >
              <SeatIcon selected={selected} name={seat.name} />
            </button>
          );
        })}
      </div>

      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center">
            <Image height={50} width={50} src="/driver.png" alt="driver" />
            <div className="grid grid-cols-2 gap-x-1">
              {SectionB.map((seat) => {
                const selected = trip.Booked.includes(seat.name);
                const isSelected = selectedSeats.includes(seat.name);
                const isOccupied = trip.Booked.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      selected ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    // onClick={!seat.selected ? handleClick : alert("Already Selected") }
                    // onClick={
                    //   seat.selected !== true ? handleClick : console.log("")
                    // }

                    onClick={
                      selected ? null : () => handleSelectedState(seat.name)
                    }
                    onKeyPress={
                      selected
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat.name);
                            }
                          }
                    }
                  >
                    <SeatIcon selected={selected} name={seat.name} />
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
