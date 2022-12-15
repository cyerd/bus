"use client";

import Head from "next/head";
import React, { useState } from "react";
import Header from "../../components/Layouts/Header";
import ParcelList from "../../components/Seat/ParcelList";
import { v4 as uuid } from "uuid";
import useSWR from "swr";
import { Router, useRouter } from "next/router";
import fetcher from "../../../utils/fetchBookings";

export default function Addparcel() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [sender, setSender] = useState("");
  const [senderMobile, setSenderMobile] = useState("");
  const [receiver, setReceiver] = useState("");
  const [receiverMobile, setReceiverMobile] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [cost, setCost] = useState("");
  let [totalAmount, setTotalAmount] = useState("");

  const router = useRouter();
  const reload = () => {
    router.reload();
  };

  const { data: parcelList, error, mutate } = useSWR("/api/getparcel", fetcher);

  console.log("parcelList: ", parcelList);

  const pickDate = new Date();

  const handleParcel = async (e) => {
    e.preventDefault();

    const id = uuid();

    const parcel = {
      id,
      from: from,
      destination: destination,
      pickup: pickup,
      drop: drop,
      sender: sender,
      senderMobile: Number(senderMobile),
      receiver: receiver,
      receiverMobile: Number(receiverMobile),
      itemType: itemType,
      itemName: itemName,
      itemQty: Number(itemQty),
      cost: Number(cost),
      totalAmount: Number(totalAmount),

      pickDate: pickDate,
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addparcels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parcel,
        }),
      }).then((res) => res.json());

      return [data.parcel, ...parcelList];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [parcel, ...parcelList],
      rollbackOnError: true,
    });

    // await router.reload()
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
      <form className="flex h-fit ">
        <div
          className=" md:w-4/12 flex flex-col "
          style={{ backgroundColor: "#FBEAD8", padding: 10 }}
        >
          <div>
            <p className="font-bold ">PARCEL DETAILS</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> SOURCE</p>
            <div className="flex flex-col w-7/12 ">
              <select
                className="rounded my-2"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              >
                <option>From</option>
                <option value="Garissa">GARISSA</option>
              </select>
              <select
                className="rounded"
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
              >
                <option>Pickup Point</option>
                <option
                  value="Garissa Office"
                  className="text-gray-50 bg-gray-500"
                >
                  Garissa Office
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> DESTINATION</p>
            <div className="flex flex-col  w-7/12 ">
              <select
                className="rounded my-2"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              >
                <option>To</option>
                <option value="Nairobi">Nairobi</option>
              </select>
              <select
                className="rounded"
                value={drop}
                onChange={(e) => {
                  setDrop(e.target.value);
                }}
              >
                <option>Drop Point</option>
                <option
                  value="Nairobi Office"
                  className="text-gray-50 bg-gray-500"
                >
                  Nairobi Office
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> SENDER</p>
            <div className="flex flex-col  w-7/12 ">
              <input
                onChange={(e) => {
                  setSender(e.target.value);
                }}
                value={sender}
                type="text"
                required
                placeholder="Sender Name"
                className="pl-3 border border-gray-200 mb-2  outline-none"
              />
              <p className="bg-white flex ">
                <span className="border border-gray-200 bg-white px-1  ">
                  +254
                </span>{" "}
                <input
                  onChange={(e) => {
                    setSenderMobile(e.target.value);
                  }}
                  value={senderMobile}
                  type="text"
                  pattern="\d*"
                  className=" outline-none w-7/12   pl-2"
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-2 border-white p-3 items-center mt-2 ">
            <p> RECEIVER</p>
            <div className="flex flex-col  w-7/12   ">
              <input
                onChange={(e) => {
                  setReceiver(e.target.value);
                }}
                value={receiver}
                type="text"
                required
                placeholder="Receiver Name"
                className="pl-3 border border-gray-200 mb-2  outline-none"
              />
              <p className="bg-white flex ">
                <span className="border border-gray-200 bg-white px-1  ">
                  +254
                </span>{" "}
                <input
                  onChange={(e) => {
                    setReceiverMobile(e.target.value);
                  }}
                  value={receiverMobile}
                  type="text"
                  pattern="\d*"
                  className=" outline-none w-7/12   pl-2"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 justify-evenly w-full overflow-hidden">
          <div className="flex flex-col bg-yellow-100 rounded-lg">
            <div className="flex">
              <div className="flex flex-col items-center ">
                <label>Item Type</label>
                <input
                  onChange={(e) => {
                    setItemType(e.target.value);
                  }}
                  value={itemType}
                  className="px-5 rounded border border-gray-300 w-32 p-2 mt-2 mx-4 "
                  type="text"
                  required
                  placeholder="Item Type"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label>Item Name</label>
                <input
                  onChange={(e) => {
                    setItemName(e.target.value);
                  }}
                  value={itemName}
                  className="px-5 rounded border border-gray-300 w-32 p-2 mt-2 mx-4"
                  type="text"
                  required
                  placeholder="Item Name"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label>Qty</label>
                <input
                  onChange={(e) => {
                    setItemQty(e.target.value);
                  }}
                  value={itemQty}
                  className="px-5 rounded border border-gray-300 w-32 p-2 mt-2 mx-4"
                  type="text"
                  pattern="\d*"
                  required
                  placeholder="Quantity"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label>Cost</label>
                <input
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                  value={cost}
                  className="px-5 rounded border border-gray-300 w-32 p-2 mt-2 mx-4"
                  type="text"
                  pattern="\d*"
                  required
                  placeholder="Cost"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label>Total</label>
                <input
                  onChange={(e) => {
                    setTotalAmount(e.target.value);
                  }}
                  disabled
                  value={(totalAmount = itemQty * cost)}
                  className="px-5 rounded border border-gray-300 w-32 p-2 mt-2 mx-4"
                  type="text"
                  required
                  placeholder="Total"
                />
              </div>
            </div>
            <div>
              <button
                className="rounded-lg bg-gray-200 my-5 border border-gray-400 font-mono font-bold py-2  px-5 hover:bg-gray-800 hover:text-white mx-12"
                type="reset"
                onClick={reload}
              >
                Reset
              </button>
              <button
                disabled={
                  !itemQty ||
                  !from ||
                  !destination ||
                  !drop ||
                  !sender ||
                  !receiver ||
                  !cost ||
                  !itemName ||
                  !pickup ||
                  !senderMobile ||
                  !receiverMobile
                }
                onClick={handleParcel}
                className="rounded-lg bg-green-800 my-5 disabled:cursor-not-allowed disabled:bg-gray-500 border border-gray-400  text-white font-mono font-bold py-2 px-5 hover:bg-green-300 hover:text-black mx-12"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>

          <ParcelList />
        </div>
      </form>
    </div>
  );
}
