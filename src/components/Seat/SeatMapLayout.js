"use client";

import Image from "next/image";
import SeatIcon from "./SeatIcon";
import VipSeatIcon from "./VipSeatIcon";
import clsx from "clsx";
import { C, D, A, B, Staff, Trips, VIP } from "./SeatConstants";
import Staffseat from "./Staffseat";
import useSWR from "swr";
import { useEffect } from "react";
import fetcher from "../../../utils/fetchBookings";

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

  const { data: seats, error, mutate } = useSWR("/api/bookings", fetcher);

  useEffect(() => {}, [seats]);



  return (
    <div className="flex justify-around w-full mt-2 relative ">
      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center ">
            {VIP.map((seat) => {
              const Booked = seats?.includes(seat.name);
              const Locked = trip.lock.includes(seat.name);

              return (
                <button
                  key={seat.name}
                  className={clsx(
                    Booked || Locked ? "cursor-not-allowed" : "",
                    "relative flex"
                  )}
                  // onClick={handleClick}

                  onClick={
                    Booked || Locked
                      ? null
                      : (e) => {
                          e.preventDefault();
                          handleSelectedState(seat);
                        }
                  }
                  onKeyPress={
                    Booked || Locked
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
                    trip={trip}
                    selectedSeats={selectedSeats}
                    Locked={Locked}
                    Booked={Booked}
                    name={seat.name}
                  />
                </button>
              );
            })}
            <div className="flex mb-12">
              {D.map((seat) => {
                const Booked = seats?.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);

                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked
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
                    />
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-x-1 ">
              {Staff.map((seat) => {
                const Booked = seats?.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked
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
                    />
                  </button>
                );
              })}

              {A.map((seat) => {
                const Booked = seats?.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked
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
          const Booked = seats?.includes(seat.name);
          const Locked = trip.lock.includes(seat.name);
          return (
            <button
              key={seat.name}
              className={clsx(
                Booked || Locked ? "cursor-not-allowed" : "",
                "relative flex"
              )}
              onClick={
                Booked || Locked
                  ? null
                  : (e) => {
                      e.preventDefault();
                      handleSelectedState(seat);
                    }
              }
              onKeyPress={
                Booked || Locked
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
                const Booked = seats?.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked
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
