import Head from "next/head";
import React from "react";
import Header from "../../components/Layouts/Header";
import ParcelList from "../../components/Seat/ParcelList";

export default function addparcel() {
  const handleParcel = () => {
    console.log("form");
  };
  return (
    <div className="">
      {/* Page Title */}
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation bar || header bar  */}
      <Header />
      <form onSubmit={handleParcel} className="flex h-fit ">
        <div
          className=" md:w-4/12"
          style={{ backgroundColor: "#FBEAD8", padding: 10 }}
        >
          <div>
            <p className="font-bold ">PARCEL DETAILS</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> SOURCE</p>
            <div className="flex flex-col w-7/12 ">
              <select className="rounded my-2">
                <option>GARISSA</option>
              </select>
              <select className="rounded">
                <option className="text-gray-50 bg-gray-500"> -- choose</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> DESTINATION</p>
            <div className="flex flex-col  w-7/12 ">
              <select className="rounded my-2">
                <option>GARISSA</option>
              </select>
              <select className="rounded">
                <option className="text-gray-50 bg-gray-500"> -- choose</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> SENDER</p>
            <div className="flex flex-col  w-7/12 ">
              <select className="rounded my-2">
                <option>GARISSA</option>
              </select>
              <select className="rounded">
                <option className="text-gray-50 bg-gray-500"> -- choose</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> RECEIVER</p>
            <div className="flex flex-col  w-7/12   ">
              <input
                type="text"
                placeholder="Sender Name"
                className="pl-3 border border-gray-200 mb-2  outline-none"
              />
              <p className="bg-white flex ">
                <span className="border border-gray-200 bg-white px-1  ">
                  +254
                </span>{" "}
                <input type="text" className=" outline-none w-7/12   pl-2" />
              </p>
            </div>
          </div>
        </div>

        <ParcelList />
      </form>
    </div>
  );
}
