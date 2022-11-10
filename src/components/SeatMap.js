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
    price: [1000],
    Booked: ["A9", "STAFF", "VIP3", "B8"],
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
          Ksh 
          {(selectedSeats.length * selectedTrip.price).toLocaleString("en-US")}
        </span>
      </div>
    </div>
  );
}

function Trip({ trip, onChange }) {
  return (
    <div className="Trip">
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
        <span className="seat Booked" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
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
            <Image height={50} width={50} src="/driver.png" alt="driver" />
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
