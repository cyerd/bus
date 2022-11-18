

import Image from "next/image";
import SeatIcon from "./SeatIcon";
import VipSeatIcon from "./VipSeatIcon";
import clsx from "clsx";
import { C, D, A, B, Staff, Trips, VIP } from "./SeatConstants";
import Staffseat from "./Staffseat";


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

  return (
    <div className="flex justify-around w-full mt-2 relative ">
      <div>
        <div className="flex items-center">
          <div className="px-3 flex flex-col items-center justify-center ">
            {VIP.map((seat) => {
              const Booked = trip.Booked.includes(seat.name);
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
                    Booked || Locked ? null : () => handleSelectedState(seat)
                  }
                  onKeyPress={
                    Booked || Locked
                      ? null
                      : (e) => {
                          if (e.key === "Enter") {
                            handleSelectedState(seat);
                          }
                        }
                  }
                >
                  <VipSeatIcon
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
                const Booked = trip.Booked.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);

                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked ? null : () => handleSelectedState(seat)
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <SeatIcon
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
                const Booked = trip.Booked.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked ? null : () => handleSelectedState(seat)
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <Staffseat
                      Locked={Locked}
                      Booked={Booked}
                      name={seat.name}
                    />
                  </button>
                );
              })}

              {A.map((seat) => {
                const Booked = trip.Booked.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked ? null : () => handleSelectedState(seat)
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <SeatIcon
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
          const Booked = trip.Booked.includes(seat.name);
          const Locked = trip.lock.includes(seat.name);
          return (
            <button
              key={seat.name}
              className={clsx(
                Booked || Locked ? "cursor-not-allowed" : "",
                "relative flex"
              )}
              onClick={
                Booked || Locked ? null : () => handleSelectedState(seat)
              }
              onKeyPress={
                Booked || Locked
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            >
              <SeatIcon Locked={Locked} Booked={Booked} name={seat.name} />
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
                const Booked = trip.Booked.includes(seat.name);
                const Locked = trip.lock.includes(seat.name);
                return (
                  <button
                    key={seat.name}
                    className={clsx(
                      Booked || Locked ? "cursor-not-allowed" : "",
                      "relative flex"
                    )}
                    onClick={
                      Booked || Locked ? null : () => handleSelectedState(seat)
                    }
                    onKeyPress={
                      Booked
                        ? null
                        : (e) => {
                            if (e.key === "Enter") {
                              handleSelectedState(seat);
                            }
                          }
                    }
                  >
                    <SeatIcon
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
