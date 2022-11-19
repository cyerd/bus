/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */

import React, { useState } from "react";
import clsx from "clsx";

const Trips = [
  {
    name: "Avenger",
    price: 10,
    Booked: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Joker",
    price: 12,
    Booked: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    price: 8,
    Booked: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "the lion king",
    price: 9,
    Booked: [10, 12, 50, 33, 28, 47],
  },
];

const normal = 1500;

const seats = [
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

export default function Layout() {
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
        <span className="count">{selectedSeats.slice().toString()}</span> seats
        for the price of{" "}
        <span className="total">{selectedSeats.length * selectedTrip}$</span>
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
  function handleSelectedState(seat, price) {
    const isSelected = selectedSeats.includes(seat.name);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat, price]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = trip.Garissa.Booked.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={
                isOccupied
                  ? null
                  : () => handleSelectedState(seat.name, seat.price)
              }
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat.name, seat.price);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
