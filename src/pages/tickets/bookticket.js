import Head from "next/head";
import React, { useState } from "react";
import Header from "../../components/Layouts/Header";

import "react-datepicker/dist/react-datepicker.css";
import Book from "../../components/Book";

import { Trips } from "../../components/Seat/SeatConstants";

function Bookticket() {
  const [place, setPlace] = useState("GARISSA");

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
      <main className="flex w-full ">
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
