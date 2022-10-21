import Head from "next/head";
import Image from "next/image";
import Tickets from "../components/Tickets";
import Header from "../components/Header";
import Parcels from "../components/Parcels";

import { useEffect, useState } from "react";
import Recon from "../components/Recon";
import Reports from "../components/Reports";
import Calendar from "../components/Calendar";


export default function Home(props) {


  return (
    <div className="flex flex-col h-full justify-between">
      {/* <div> */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full">
        <div className="flex flex-col w-full lg:w-9/12 z-0">
          <Tickets />
          <Parcels />
          <Recon />
          <Reports />
        </div>
        <div className="hidden lg:flex flex-col items-center ">

          <div className="flex  items-center max-w-md mt-12">
            {/* <Calendar
              className="flex flex-col items-center mx-5 p-0 "
              onChange={onChange}
              value={value}
            /> */}
          <Calendar/>
          </div>
        </div>
      </main>

      <footer className="flex flex-1 border-t-1 border-gray-100 justify-center items-center ">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          Powered by
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
