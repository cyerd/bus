import { TableCellsIcon } from "@heroicons/react/20/solid";
import React, { use, useEffect, useState } from "react";
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

  const { messages, error, mutate } = useSWR("/api/getMessages", fetcher);

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
  }, [trip, seatNo]);

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

    const bookings = [];

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

      return [data.booking, ...bookings];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [bookings, ...bookings],
      rollbackOnError: true,
    });
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

    const bookings = [];

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

      return [data.booking, ...bookings];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [bookings, ...bookings],
      rollbackOnError: true,
    });
  };

  return (
    <div className="flex w-full">
      <form onSubmit={BookTicket} className="flex w-full flex-col xl:flex-row">
        <div className="mx-1 w-full xl:w-9/12 ">
          <div className="flex bg-blue-300 py-1 flex flex-col lg:flex-row items-center">
            <div className="ml-1 my-2 lg:my-0">
              <select
                className="w-fit h-fit border-2 py-1 px-3 rounded-lg justify-between mr-2"
                value={place}
                onChange={handlePlace}
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
                className=" w-fit h-fit border-2 py-1 px-3 rounded-lg justify-between mr-2"
                value={destinations}
                onChange={handleDestination}
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
                className="ml-2"
                value={startDate}
                selected={startDate}
                onChange={handleDate}
                dateFormat="dd/M/yyyy"
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
            <button className="flex items-center ml-2 my-2  lg:my-0">
              <label
                htmlFor="disabled-checked-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultValue
                  id="disabled-checked-toggle"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full" />
                <span className="ml-3 text-sm text-black font-bold ">
                  Highway
                </span>
              </label>
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
                <lable className="font-bold my-2">From</lable>
                <input
                  disabled
                  type="text"
                  value={value}
                  className="bg-transparent outline-0 disabled"
                />
              </div>
              <div className="flex flex-col mx-4">
                <lable className="font-bold my-2">Destination</lable>

                <select
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  value={destinations}
                  onChange={handleDestination}
                >
                  {Destination.map((place) => (
                    <option key={place.name} value={place.name}>
                      {place.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mx-4">
                <lable className="font-bold my-2">Pickup Point</lable>

                <select
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  value={pickup}
                  onChange={handlePickup}
                >
                  {Destination.map((place) => (
                    <option key={place.name} value={place.name}>
                      {place.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mx-4">
                <lable className="font-bold my-2">Currency</lable>

                <select
                  disabled
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  value={pickup}
                  onChange={handlePickup}
                >
                  <option key="1" className="text-center " value="ksh">
                    Kenyan Shilling
                  </option>
                  <option key="2" className="text-center " value="usd">
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
                  key={seat.name}
                  className="flex flex-col  lg:flex-row mx-2 overflow-auto text-xs pb-2"
                >
                  <div className="flex flex-col mx-1 ">
                    <lable className="font-bold my-2 ">Full Name</lable>
                    <input
                      className="border-2 border-gray-300 rounded px-1 w-fit py-2"
                      placeholder="Full Name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="flex flex-col mx-1">
                    <lable className="font-bold my-2">Mobile</lable>
                    <span className="flex bg-gray-100 ">
                      <select className="border border-gray-300 bg-gray-200 font-bold  py-2">
                        <option>+254</option>
                      </select>
                      <input
                        className="border-2 border-gray-300 rounded px-1 py-2 "
                        placeholder="Mobile"
                        type="text"
                        required
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col mx-1">
                    <lable className="font-bold my-2">Age</lable>
                    <input
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      placeholder="Age"
                      type="text"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col  mx-1">
                    <lable className="font-bold my-2">Gender</lable>
                    <div className="flex flex-col lg:flex-row pt-3">
                      <span className="flex">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handlegender}
                        />
                        <p className="pl-1">M</p>
                      </span>
                      <span className="flex lg:ml-1">
                        <input
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
                    <lable className="font-bold my-2">Nationality</lable>
                    <input
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      placeholder="Nationality"
                      type="text"
                      value={nationality}
                      onChange={(e) => {
                        setNationality(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col mx-1">
                    <lable className="font-bold my-2">ID Number</lable>
                    <input
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      placeholder="ID No."
                      type="text"
                      value={idNumber}
                      onChange={(e) => {
                        setIdNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col mx-1">
                    <lable className="font-bold my-2">SEAT</lable>

                    <input
                      className="border-2 border-gray-300 rounded px-1 py-2"
                      type="text"
                      required
                      // defaultValue={seat.name}
                      autoFocus
                      value={(seatNo = seat.name)}
                      // onInput={handleSeatNo}
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
              type="text"
              value={luggage}
              onInput={(e) => {
                setLuggage(e.target.value);
              }}
              className="text-sm mx-3 my-2 py-1 px-2 bg-blue-300 rounded px-2"
            >
              <option className="bg-gray-100" value="No">
                NO
              </option>
              <option className="bg-blue-100" value="YES">
                YES
              </option>
            </select>
          </div>

          {/* Payment Details section  */}
          <span className="flex text-center text-white bg-purple-400 mt-2 rounded-t-lg py-1 px-2 ">
            <TableCellsIcon className="mr-2" height="25" /> Payment{" "}
          </span>
          {selectedSeats.forEach((subData) => (sum += subData.price))}
          <div>
            <div className="flex flex-col lg:flex-row mx-2 text-sm ">
              <div className="flex flex-col mx-1">
                <lable className="font-bold my-2 ">Total Amount</lable>
                <div className="flex bg-gray-100 items-center">
                  <p className="border-2 border-gray-300 text-lg px-1">KES</p>

                  <input
                    value={sum}
                    disabled
                    onChange={(e) => setSum(e.target.value)}
                    type="text"
                    className="bg-white text-red-500 px-5 rounded-lg text-center text-lg font-bold"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-1">
                <lable className="font-bold my-2 ">Discount</lable>
                <div className="flex bg-gray-100 ">
                  <p className="border-2 border-gray-300 text-lg px-1">KES</p>
                  <input
                    className="border-2 bg-white text-green-500 text-center text-lg font-bold"
                    value={currentValue.toLocaleString("en-US")}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-1">
                <lable className="font-bold my-2 ">Total Paid</lable>
                <div className="flex bg-gray-100 ">
                  <p className="border-2 border-gray-300 text-lg px-1">KES</p>
                  <input
                    className="border-2 border-red-400 bg-yellow-200 font-bold text-center text-lg "
                    disabled={true}
                    value={(sum - currentValue).toLocaleString("en-US")}
                    type="text"
                    onChange={(e) => setTotalAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mx-4">
                <lable className="font-bold my-2">Pickup Point</lable>

                <select
                  className=" border-2 py-1 px-3 rounded-lg justify-between mr-2"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                >
                  <option value="CASH">CASH</option>
                  <option value="MPESA">MPESA</option>
                </select>
              </div>
            </div>
          </div>

          {/* Voucher Section */}
          <div className="flex flex-col lg:flex-row mt-10 overflow-auto">
            <span className="ml-2 my-2 lg:my-0">
              <input
                className="border-2 border-gray-300  p-1"
                type="text"
                placeholder="Note"
              />
              <p className="text-blue-300 font-bold">Max 60 Characters</p>
            </span>
            <span className="ml-2 my-2 lg:my-0">
              <input
                className="border-2 border-gray-300 p-1"
                type="text"
                placeholder="Voucher Code"
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
            <button className=" px-2 py-1 rounded mx-1 border border-gray-400 my-2 lg:my-0">
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
