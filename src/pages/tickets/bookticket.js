import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../../components/Layouts/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Book from "../../components/Book";
import { format } from "date-fns";
import { Tooltip } from "@material-tailwind/react";
import SeatMapLayout from "../../components/Seat/SeatMapLayout";
import {
  Destination,
  Places,
  Trips,
} from "../../components/Seat/SeatConstants";
import Trip from "../../components/Seat/Trip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

  return (
    <div>
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full">
        <Book
          trip={selectedTrip}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) => {
            setSelectedSeats(selectedSeats);
          }}
          value={place}
        />
      </main>
    </div>
  );
}

export default Bookticket;
