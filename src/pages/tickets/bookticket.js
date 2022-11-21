
import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import React, {  useState } from "react";
import Header from "../../components/Layouts/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Book from "../../components/Book";
import { format } from "date-fns";
import { Tooltip } from "@material-tailwind/react";
import SeatMapLayout from "../../components/Seat/SeatMapLayout";
import { Trips } from "../../components/Seat/SeatConstants";
import Trip from "../../components/Seat/Trip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Places = [
  {
    name: "GARISSA",
  },
  { name: "BANGAL" },
  {
    name: "KANYONYO",
  },
  { name: "KITHIMANI" },
  {
    name: "KITHYOKA",
  },
  { name: "MATUU" },
  {
    name: "MWINGI",
  },
  { name: "NGUNI" },
  {
    name: "UKASI",
  },
  { name: "NAIROBI" },
];
const Destination = [
  {
    name: "--Destination",
  },
  { name: "BANGAL" },
  {
    name: "KANYONYO",
  },
  { name: "KITHIMANI" },
  {
    name: "KITHYOKA",
  },
  { name: "MATUU" },
  {
    name: "MWINGI",
  },
  { name: "NGUNI" },
  {
    name: "UKASI",
  },
  { name: "NAIROBI" },
];

function Bookticket() {
  const getInitialState = () => {
    const place = "GARISSA";
    return place;
  };

  const [place, setPlace] = useState("GARISSA");
  const [destination, setDestination] = useState(getInitialState);

  const handlePlace = (e) => {
    setPlace(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());

  const handleDate = (date) => setStartDate(date);

  const today = new Date();

  const resetDate = (date) => setStartDate(today);

  const nedate = format(new Date(startDate), "d-MMM-y");

  // seat
  const [selectedTrip, setSelectedTrip] = useState(Trips[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  let sum = 0;

  return (
    <div>
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col xl:flex-row">
        <div className="mx-1 w-full xl:w-9/12 ">
          <div className="flex bg-blue-300 py-1 flex flex-col lg:flex-row">
            <div className="ml-1 my-2 lg:my-0">
              <select
                className=" xl:w-64  border-2 py-1 px-3 rounded-lg justify-between mr-2"
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
                className=" xl:w-64 border-2 py-1 px-3 rounded-lg justify-between mr-2"
                value={destination}
                onChange={handleDestination}
              >
                {Destination.map((place) => (
                  <option key={place.name} value={place.name}>
                    {place.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-2 rounded-lg flex divide-x-2 w-64 bg-white  ml-1 flex items-center divide-gray-400 my-2 lg:my-0">
              <DatePicker
                className="ml-2"
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
            <button className="ml-2 text-sm lg:text-md bg-red-600 rounded-md px-1 flex justify-between w-24 p-1 xl:w-28 items-center text-white my-2 lg:my-0">
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
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="ml-3 text-sm text-black font-bold ">
                  Highway
                </span>
              </label>
            </button>
          </div>

          {/* Routine table */}
          <div className="overflow-auto ">
            <Trip
              trip={selectedTrip}
              selectedSeats={selectedSeats}
              onChange={(trip) => {
                setSelectedSeats([]);
                setSelectedTrip(trip);
              }}
            />
            <Book
              trip={selectedTrip}
              selectedSeats={selectedSeats}
              onSelectedSeatsChange={(selectedSeats) => {
                setSelectedSeats(selectedSeats);
              }}
              value={place}
            />
          </div>
          {/* sidebar seat map */}
        </div>
        <div className="w-full xl:w-3/12 border border-gray-300 rounded-xl">
          <div className="items-center ">
            <p className="text-center p-2  lg:text-sm xl:text-xl">
              Travel Date:
              <span className="text-red-600 font-extrabold">{nedate}</span>
            </p>
            <div>
              <SeatMapLayout
                trip={selectedTrip}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={(selectedSeats) => {
                  setSelectedSeats(selectedSeats);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Bookticket;
