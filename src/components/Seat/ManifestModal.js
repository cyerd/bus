import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  EyeIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";
import fetcher from "../../../utils/fetchBookings";
import useSWR from "swr";

export default function ManifestModal({
  open,
  setOpen,
  selectedDate,
  selectedTrip,
}) {
  const cancelButtonRef = useRef(null);

  const date = new Date(selectedDate).toDateString();
  const timestamp = Date.now();
  const now = new Date(timestamp).toDateString();

  const selectedtrip = selectedTrip?.name;

  const params = `/api/bookings/${date}?trip=${selectedtrip}`;

  const fetcher = async () => {
    const bookedSeats = await fetch(params);
    const data = await bookedSeats.json();
    const seats = data;

    return seats;
  };

  const { data: bookings, error, mutate } = useSWR(params, fetcher);

  // useEffect(() => {}, [bookings]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                <div className=" bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        {bookings?.bookings ? (
                          <table class="table flex justify-center items-center">
                            <thead>
                              <tr className="border">
                                <th className="border border-gray-400 bg-gray-800 text-white px-4">
                                  ID
                                </th>
                                <th className="border  border-gray-400 bg-gray-800 text-white px-4">
                                  DATE
                                </th>
                                <th className="border border-gray-400 bg-gray-800 text-white px-4">
                                  SEAT NO
                                </th>
                                <th className="border border-gray-400 bg-gray-800 text-white px-4">
                                  FULL NAME
                                </th>
                                <th className="border border-gray-400 bg-gray-800 text-white px-4">
                                  MOBILE NO
                                </th>
                                <th className="border border-gray-400 bg-gray-800 text-white px-4">
                                  TOTAL PAID
                                </th>
                                <th className="border border-gray-400 bg-gray-800 text-white px-4">
                                  ACTION
                                </th>
                              </tr>
                            </thead>
                            {bookings?.bookings?.map((booking) => (
                              <tbody key={booking.id}>
                                <tr className="border w-full border-gray-400">
                                  <td className="border truncate max-w-[150px]  px-5  border-gray-400">
                                    {booking.id}
                                  </td>
                                  <td className="border w-fit px-5 border-gray-400">
                                    {booking.startDate}
                                  </td>
                                  <td className="border w-fit px-5 border-gray-400">
                                    {booking.name}
                                  </td>
                                  <td className="border w-fit px-5 border-gray-400">
                                    {booking.fullName}
                                  </td>
                                  <td className="border w-fit px-5 border-gray-400">
                                    {booking.mobile}
                                  </td>
                                  <td className="border w-fit px-5 border-gray-400">
                                    {booking.totalPaid}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light py-2  ">
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        window.print();
                                      }}
                                      className="flex items-center text-white px-4 py-1 bg-purple-800 rounded px-1"
                                    >
                                      <PrinterIcon
                                        height="25"
                                        className="pr-1"
                                      />{" "}
                                      Print{" "}
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
