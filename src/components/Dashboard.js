"use client";

import React, { Fragment } from "react";
import Tickets from "./Tickets";
import Parcels from "./Parcels";
import Recon from "./Recon";
import Reports from "./Reports";
import dynamic from "next/dynamic";


const Calendar = dynamic(() => import("./Calendar"), {
  ssr: false,
});

function Dashboard() {
  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-11/12  lg:pl-3 xl:px-5 ">
        <Tickets />
        <Parcels />
        <Recon />
        <Reports />
      </div>
      <div className="hidden lg:flex flex-col h-full  max-w-md mt-2 p-0 xl:pr-5 ">
        <Calendar />
      </div>
    </Fragment>
  );
}

export default Dashboard;
