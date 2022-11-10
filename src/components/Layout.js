export default function Layout({ trip, selectedSeats, onSelectedSeatsChange }) {
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
