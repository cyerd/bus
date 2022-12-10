"use client";

import Image from "next/image";
import SeatIcon from "./SeatIcon";
import VipSeatIcon from "./VipSeatIcon";
import clsx from "clsx";
import { C, D, A, B, Staff, Trips, VIP } from "./SeatConstants";
import Staffseat from "./Staffseat";
import useSWR from "swr";
import { useEffect } from "react";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/getBookings");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json()
// }

export default function SeatMapLayout({
  trip,
  selectedSeats,
  onSelectedSeatsChange,
  selectedDate,
}) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  const date= selectedDate.toDateString();
  const selectedtrip = trip.name;

  const params = `/api/bookings/${date}?trip=${selectedtrip}`;

  const fetcher = async () => {
    const bookedSeats = await fetch(params);
    const data = await bookedSeats.json();
    const seats = data;

    return seats;
  };

  const { data: seats, error, mutate } = useSWR(params, fetcher);

  useEffect(() => {}, [seats, selectedDate]);

  const now = new Date().toDateString();

  const previousDates = date < now ;
  console.log("now",now, "date:", date,  "prev:",previousDates, "selected:", selectedDate);

  return (
    <div className="flex justify-around w-full mt-2 relative ">
      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center ">
            {VIP.map((seat) => {
              const Booked = seats?.takenSeats?.includes(seat.name);
              

              const Locked = seats?.reservedSeats?.includes(seat.name);

              return (
                <button
                  key={seat.name}
                  className={clsx(
                    Booked || Locked || previousDates
                      ? "cursor-not-allowed"
                      : "",
                    "relative flex"
                  )}
                  // onClick={handleClick}

                  onClick={
                    Booked || Locked || previousDates
                      ? null
                      : (e) => {
                          e.preventDefault();
                          handleSelectedState(seat);
                        }
                  }
                  onKeyPress={
                    Booked || Locked || previousDates
                      ? null
                      : (e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSelectedState(seat);
                          }
                        }
                  }
                >
                  <VipSeatIcon
                    selectedDate={date}
                    trip={trip}
                    selectedSeats={selectedSeats}
                    Locked={Locked}
                    Booked={Booked}
                    name={seat.name}
                    previousDates={previousDates}
                  />
                </button>
              );
            })}
            <div className="flex mb-12">
              {D.map((seat) => {
                const Booked = seats?.takenSeats?.includes(seat.name);
                const Locked = seats?.reservedSeats?.includes(seat.name);

                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked || previousDates
                        ? "cursor-not-allowed"
                        : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked || previousDates
                        ? null
                        : (e) => {
                            e.preventDefault();
                            handleSelectedState(seat);
                          }
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <SeatIcon
                      trip={trip}
                      Locked={Locked}
                      Booked={Booked}
                      name={seat.name}
                      previousDates={previousDates}
                    />
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-x-1 ">
              {Staff.map((seat) => {
                const Booked = seats?.takenSeats?.includes(seat.name);
                const Locked = seats?.reservedSeats?.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked || previousDates
                        ? "cursor-not-allowed"
                        : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked || previousDates
                        ? null
                        : (e) => {
                            e.preventDefault();
                            handleSelectedState(seat);
                          }
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <Staffseat
                      trip={trip}
                      Locked={Locked}
                      Booked={Booked}
                      name={seat.name}
                      previousDates={previousDates}
                    />
                  </button>
                );
              })}

              {A.map((seat) => {
                const Booked = seats?.takenSeats?.includes(seat.name);
                const Locked = seats?.reservedSeats?.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked || previousDates
                        ? "cursor-not-allowed"
                        : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked || previousDates
                        ? null
                        : (e) => {
                            e.preventDefault();
                            handleSelectedState(seat);
                          }
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <SeatIcon
                      trip={trip}
                      Locked={Locked}
                      Booked={Booked}
                      name={seat.name}
                      previousDates={previousDates}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0">
        {C.map((seat) => {
          const Booked = seats?.takenSeats?.includes(seat.name);
          const Locked = seats?.reservedSeats?.includes(seat.name);
          return (
            <button
              key={seat.name}
              className={clsx(
                Booked || Locked || previousDates ? "cursor-not-allowed" : "",
                "relative flex"
              )}
              onClick={
                Booked || Locked || previousDates
                  ? null
                  : (e) => {
                      e.preventDefault();
                      handleSelectedState(seat);
                    }
              }
              onKeyPress={
                Booked || Locked || previousDates
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSelectedState(seat);
                      }
                    }
              }
            >
              <SeatIcon
                trip={trip}
                Locked={Locked}
                Booked={Booked}
                name={seat.name}
                previousDates={previousDates}
              />
            </button>
          );
        })}
      </div>

      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center">
            <Image height={50} width={50} src="/driver.png" alt="driver" />
            <div className="grid grid-cols-2 gap-x-1">
              {B.map((seat) => {
                const Booked = seats?.takenSeats?.includes(seat.name);
                const Locked = seats?.reservedSeats?.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked || previousDates
                        ? "cursor-not-allowed"
                        : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked || previousDates
                        ? null
                        : (e) => {
                            e.preventDefault();
                            handleSelectedState(seat);
                          }
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <SeatIcon
                      trip={trip}
                      Locked={Locked}
                      Booked={Booked}
                      name={seat.name}
                      previousDates={previousDates}
                    />
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
