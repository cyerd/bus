import { TableCellsIcon } from "@heroicons/react/20/solid";
import React, { use, useEffect, useId, useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetchBookings";
import { v4 as uuid } from "uuid";

import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";
import { Tooltip } from "@material-tailwind/react";

import { Destination, Places, Trips } from "./Seat/SeatConstants";
import Trip from "./Seat/Trip";
import SeatMapLayout from "./Seat/SeatMapLayout";

export default function Booking({ value, trip }) {
  const [destinations, setDestination] = useState("NAIROBI");
  const [pickup, setPickup] = useState("GARISSA");
  const [currentValue, setCurrentValue] = useState(0);
  const [fullName, setFullName] = useState("");
  const [gender, setgender] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [idNumber, setIdNumber] = useState();
  const [luggage, setLuggage] = useState("NO");

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };
  const handlePickup = (e) => {
    setPickup(e.target.value);
  };
  const handlegender = (e) => {
    setgender(e.target.value);
  };

  const [place, setPlace] = useState("GARISSA");

  const handlePlace = (e) => {
    setPlace(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());

  const handleDate = (date) => setStartDate(date);

  const today = new Date();

  const resetDate = (date) => setStartDate(today);

  const nedate = format(new Date(startDate), "d-MMM-y");
  const [totalAmount, setTotalAmount] = useState();
  const [payment, setPayment] = useState("CASH");
  let [sum, setSum] = useState(0);
  let [seatNo, setSeatNo] = useState();
  // const handleSeatNo = (e) => {
  //   setSeatNo(e.target.value);
  // };
  // seat
  const [selectedTrip, setSelectedTrip] = useState(Trips[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    setCurrentValue("");
    setSelectedSeats([]);
  }, [trip, seatNo, startDate]);

  const date = new Date(startDate).toDateString();
  const timestamp = Date.now();
  const now = new Date(timestamp).toDateString();

  const selectedtrip = trip.name;

  const params = `/api/bookings/${date}?trip=${selectedtrip}`;

  const fetcher = async () => {
    const bookedSeats = await fetch(params);
    const data = await bookedSeats.json();
    const seats = data;

    return seats;
  };



  const { data: seats, error, mutate } = useSWR(params, fetcher);

  const BookTicket = async (e) => {
    e.preventDefault();

    const id = uuid();

    const booking = {
      id,
      from: value,
      destination: destinations,
      pickup: pickup,
      fullName: fullName,
      mobile: mobile,
      age: age,
      nationality: nationality,
      luggage: luggage,
      startDate: startDate.toDateString(),
      gender: gender,
      trip: selectedTrip.name,
      selectedSeats: selectedSeats.toString,
      totalAmount: sum,
      discount: currentValue,
      totalPaid: sum - currentValue,
      paymentMethod: payment,
      seatNo: seatNo,
      idNumber: idNumber,
    };


    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addBookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booking,
        }),
      }).then((res) => res.json());

      return [data.booking, ...seats?.bookings];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [booking, ...seats?.bookings],
      rollbackOnError: true,
    });

    setSelectedSeats([]);
  };

  const ReserveSeats = async (e) => {
    e.preventDefault();

    const id = uuid();

    const booking = {
      id,
      from: value,
      destination: destinations,
      pickup: pickup,
      fullName: fullName,
      mobile: mobile,
      age: age,
      nationality: nationality,
      luggage: luggage,
      startDate: startDate.toDateString(),
      gender: gender,
      trip: selectedTrip.name,
      selectedSeats: selectedSeats.toString,
      totalAmount: sum,
      discount: currentValue,
      totalPaid: sum - currentValue,
      paymentMethod: payment,
      seatNo: seatNo,
      idNumber: idNumber,
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/reserveSeat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booking,
        }),
      }).then((res) => res.json());

      return [data.booking, ...seats?.bookings];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [booking, ...seats?.bookings],
      rollbackOnError: true,
    });
    setSelectedSeats([]);
  };

  const id = useId()

  return (
    <div className="flex w-full">
      <form
        id={id}
        onSubmit={BookTicket}
        className="flex w-full flex-col xl:flex-row"
      >
        <div className="mx-1 w-full xl:w-9/12 overflow-auto ">
          <div className="flex bg-blue-300 py-1 flex flex-col lg:flex-row items-center">
            <div className="ml-1 my-2 lg:my-0">
              <select
                id={id}
                className="w-fit h-fit border-2 py-1 px-3 rounded-lg justify-between mr-2"
                value={place}
                onChange={handlePlace}
                name="place"
              >
                {Places.map((place) => (
                  <option key={place.name} value={place.name}>
                    {place.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-1 my-2 lg:my-0">
              <select
                id={id}
                className=" w-fit h-fit border-2 py-1 px-3 rounded-lg justify-between mr-2"
                value={destinations}
                onChange={handleDestination}
                name="destination"
              >
                {Destination.map((place) => (
                  <option key={place.name} value={place.name}>
                    {place.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-2 rounded-lg flex divide-x-2 w-fit h-fit p-1 bg-white items-center ml-1 flex items-center divide-gray-400 my-2 lg:my-0">
              <DatePicker
                id={id}
                className="ml-2"
                value={startDate}
                selected={startDate}
                onChange={handleDate}
                dateFormat="dd/M/yyyy"
                name="traveldate"
              />
              <Tooltip
                content="Reset Date"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <button onClick={resetDate}>
                  <CalendarDaysIcon height="23" className="pl-1" />
                </button>
              </Tooltip>
            </div>
            <button className="ml-2 text-sm lg:text-md bg-red-600 rounded-md px-1 flex justify-between w-fit h-fit p-1  items-center text-white my-2 lg:my-0">
              Lock Trip <ChevronDownIcon height="18" />{" "}
            </button>
          </div>

          <Trip
            selectedDate={startDate}
            selectedTrip={selectedTrip}
            selectedSeats={selectedSeats}
            onChange={(trip) => {
              setSelectedSeats([]);
              setSelectedTrip(trip);
            }}
          />

          <div className="flex items-center my-2 bg-gray-200 p-2">
            <p>Ticket Details</p>
            <input
              id={id}
              type="text"
              className="border-2 border-purple-500 rounded p-1 mx-2"
              placeholder="Search Ticket/Booking"
            />
            <button className="bg-purple-600 text-white text-center px-2 py-1 rounded mx-1">
              Search
            </button>
          </div>
          <div className="w-full flex flex-1 bg-teal-100 py-5">
            <div className="flex flex-col lg:flex-row mx-2 ">
              <div className="flex flex-col mx-4">
                <label className="font-bold my-2">From</label>
                <input
                  id={id}
                  disabled
                  type="text"
                  value={value}
                  className="bg-transparent outline-0 disabled"
                  name="from"
                />
              </div>
              <div className="flex flex-col mx-4">
                <label className="font-bold my-2">Destination</label>

                <select
                  id={id}
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  value={destinations}
                  onChange={handleDestination}
                  name="destination"
                >
                  {Destination.map((place) => (
                    <option key={place.name} value={place.name}>
                      {place.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mx-4">
                <label className="font-bold my-2">Pickup Point</label>

                <select
                  id={id}
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  value={pickup}
                  onChange={handlePickup}
                  name="pickup"
                >
                  {Destination.map((place) => (
                    <option id={id} key={place.name} value={place.name}>
                      {place.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mx-4">
                <label className="font-bold my-2">Currency</label>

                <select
                  id={id}
                  disabled
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  name="currency"
                >
                  <option id={id} key="1" className="text-center " value="ksh">
                    Kenyan Shilling
                  </option>
                  <option id={id} key="2" className="text-center " value="usd">
                    USD
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-orange-200">
            <span className="flex text-center text-white bg-purple-400 mt-2 rounded-t-lg py-1 px-2">
              <TableCellsIcon className="mr-2" height="25" /> Passengers
            </span>
            <div>
              {selectedSeats.map((seat) => (
                <div
                  id={id}
                  key={seat.name}
                  className="flex flex-col  lg:flex-row mx-2 overflow-auto text-xs pb-2"
                >
                  <div className="flex flex-col mx-1 ">
                    <label className="font-bold my-2 ">Full Name</label>
                    <input
                      id={id}
                      className="border-2 border-gray-300 rounded px-1 w-fit py-2"
                      placeholder="Full Name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      name="fullName"
                    />
                  </div>

                  <div className="flex flex-col mx-1">
                    <label className="font-bold my-2">Mobile</label>
                    <span className="flex bg-gray-100 ">
                      <select
                        id={id}
                        className="border border-gray-300 bg-gray-200 font-bold  py-2"
                      >
                        <option>+254</option>
                      </select>
                      <input
                        id={id}
                        className="border-2 border-gray-300 rounded px-1 py-2 "
                        placeholder="Mobile"
                        type="text"
                        required
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                        name="mobile"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col mx-1">
                    <label className="font-bold my-2">Age</label>
                    <input
                      id={id}
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      placeholder="Age"
                      type="text"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      name="Age"
                    />
                  </div>
                  <div className="flex flex-col  mx-1">
                    <label className="font-bold my-2">Gender</label>
                    <div className="flex flex-col lg:flex-row pt-3">
                      <span className="flex">
                        <input
                          id={id}
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handlegender}
                        />
                        <p className="pl-1">M</p>
                      </span>
                      <span className="flex lg:ml-1">
                        <input
                          id={id}
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
                    <label className="font-bold my-2">Nationality</label>
                    <input
                      id={id}
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      placeholder="Nationality"
                      type="text"
                      value={nationality}
                      onChange={(e) => {
                        setNationality(e.target.value);
                      }}
                      name="nationality"
                    />
                  </div>
                  <div className="flex flex-col mx-1">
                    <label className="font-bold my-2">ID Number</label>
                    <input
                      id={id}
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      placeholder="ID No."
                      type="text"
                      value={idNumber}
                      onChange={(e) => {
                        setIdNumber(e.target.value);
                      }}
                      name="idnumber"
                    />
                  </div>
                  <div className="flex flex-col mx-1">
                    <label className="font-bold my-2">SEAT</label>

                    <input
                      id={id}
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      type="text"
                      required
                      // defaultValue={seat.name}
                      autoFocus
                      value={(seatNo = seat.name)}
                      // onInput={handleSeatNo}
                      name="seatno"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Luggage Section */}
          <div className="my-5">
            <p> Luggage Present?</p>
            <select
              id={id}
              type="text"
              value={luggage}
              onInput={(e) => {
                setLuggage(e.target.value);
              }}
              name="luggage"
              className="text-sm mx-3 my-2 py-1 px-2 bg-blue-300 rounded px-2"
            >
              <option id={id} className="bg-gray-100" value="No">
                NO
              </option>
              <option id={id} className="bg-blue-100" value="YES">
                YES
              </option>
            </select>
          </div>

          {/* Payment Details section  */}
          <span className="flex text-center text-white bg-purple-400 mt-2  rounded-t-lg py-1 px-2 ">
            <TableCellsIcon className="mr-2" height="25" /> Payment{" "}
          </span>
          {selectedSeats.forEach((subData) => (sum += subData.price))}

          <div className="flex flex-col  lg:flex-row mx-2 text-sm justify-between overflow-auto">
            <div className="flex flex-col mx-1 w-fit">
              <label className="font-bold my-2 ">Total Amount</label>
              <div className="flex bg-gray-100 items-center">
                <p className="border-2 border-gray-300 text-lg px-1">KES</p>

                <input
                  id={id}
                  value={sum}
                  disabled
                  onChange={(e) => setSum(e.target.value)}
                  type="text"
                  className="bg-white text-red-500 px-5 lg:w-20 rounded-lg text-center text-lg font-bold"
                  name="sum"
                />
              </div>
            </div>
            <div className="flex flex-col mx-1 w-fit">
              <label className="font-bold my-2 ">Discount</label>
              <div className="flex bg-gray-100 ">
                <p className="border-2 border-gray-300 text-lg px-1">KES</p>
                <input
                  id={id}
                  className="border-2 bg-white text-green-500 text-center text-lg font-bold"
                  value={currentValue.toLocaleString("en-US")}
                  onChange={(e) => setCurrentValue(e.target.value)}
                  type="text"
                  name="discount"
                />
              </div>
            </div>
            <div className="flex flex-col mx-1 w-fit">
              <label className="font-bold my-2 ">Total Paid</label>
              <div className="flex bg-gray-100 ">
                <p className="border-2 border-gray-300 text-lg px-1">KES</p>
                <input
                  id={id}
                  className="border-2 border-red-400 bg-yellow-200 font-bold text-center text-lg "
                  disabled={true}
                  value={(sum - currentValue).toLocaleString("en-US")}
                  type="text"
                  onChange={(e) => setTotalAmount(e.target.value)}
                  name="total"
                />
              </div>
            </div>
            <div className="flex flex-col mx-4 w-fit">
              <label className="font-bold my-2">Payment Method</label>

              <select
                id={id}
                className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                name="payment"
              >
                <option id={id} value="CASH">
                  CASH
                </option>
                <option id={id} value="MPESA">
                  MPESA
                </option>
              </select>
            </div>
          </div>

          {/* Voucher Section */}
          <div className="flex flex-col lg:flex-row mt-10 overflow-auto">
            <span className="ml-2 my-2 lg:my-0">
              <input
                id={id}
                className="border-2 border-gray-300  p-1"
                type="text"
                placeholder="Note"
                name="note"
              />
              <p className="text-blue-300 font-bold">Max 60 Characters</p>
            </span>
            <span className="ml-2 my-2 lg:my-0">
              <input
                id={id}
                className="border-2 border-gray-300 p-1"
                type="text"
                placeholder="Voucher Code"
                name="voucher"
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
            <button
              onClick={() => {
                setFullName("");
                setMobile("");
                setAge("");
                setNationality("");
                setIdNumber("");
                setSelectedSeats([]);
              }}
              type="reset"
              className=" px-2 py-1 rounded mx-1 border border-gray-400 my-2 lg:my-0"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={!fullName || !mobile}
              className="bg-gray-800 disabled:cursor-not-allowed text-white px-2 py-1 rounded mx-1 border border-gray-300 my-2 lg:my-0"
            >
              Book
            </button>
            <button
              onClick={ReserveSeats}
              className="bg-red-500 text-white px-2 py-1 rounded mx-1 text-center border border-gray-300 my-2 lg:my-0"
            >
              Reserve Seat
            </button>
          </div>
        </div>

        <div className="w-full xl:w-3/12 border border-gray-300 rounded-xl">
          <div className="items-center ">
            <p className="text-center p-2  lg:text-sm xl:text-xl">
              Travel Date:
              <span className="text-red-600 font-extrabold">{nedate}</span>
            </p>
            <div>
              <SeatMapLayout
                selectedDate={startDate}
                trip={selectedTrip}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={(selectedSeats) => {
                  setSelectedSeats(selectedSeats);
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
