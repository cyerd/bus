import { EyeIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Trips() {
  return (
    <div>
      <div className="flex flex-col border border-gray-300 ">
        <div className=" sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-3 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full ">
                <thead className="bg-black border ">
                  <tr>
                    <th
                      scope="col"
                      className="border border-white  text-white px-3 py-4 text-left"
                    >
                      Route
                    </th>
                    <th
                      scope="col"
                      className="border border-white  text-white px-3 py-4 text-left"
                    >
                      Fleet
                    </th>
                    <th
                      scope="col"
                      className=" border border-white text-white px-3 py-4 text-left"
                    >
                      Series
                    </th>
                    <th
                      scope="col"
                      className=" border border-white text-white px-3 py-4 text-left"
                    >
                      Dep.
                    </th>
                    <th
                      scope="col"
                      className="border border-white  text-white px-3 py-4 text-left"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="border border-white  text-white px-3 py-4 text-left"
                    >
                      Report Time
                    </th>
                    <th
                      scope="col"
                      className=" border border-white text-white px-3 py-4 text-left"
                    >
                      Bus Reg No.
                    </th>
                    <th
                      scope="col"
                      className=" border border-white text-white px-3 py-4 text-left"
                    >
                      Cost
                    </th>
                    <th
                      scope="col"
                      className="border border-white  text-white px-3 py-4 text-left"
                    >
                      Available
                    </th>
                    <th
                      scope="col"
                      className="border border-white  text-white px-3 py-4 text-left"
                    >
                      Sell
                    </th>
                    <th
                      scope="col"
                      className=" border border-white text-white px-3 py-4 text-left"
                    >
                      Manifest
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100 border-b text-sm">
                    <td className="px-3 py-4  text-sm  text-gray-900">
                      GRS - NRB
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      44 Seater
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      A
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      9:30 AM
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      NAIROBI
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      6:00 AM
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      Not Assigned
                    </td>
                    <td className="text-sm flex  text-gray-900 font-light px-3 py-4 ">
                      <p className="mr-1 px-1 text-xs border border-red-400">
                        1800
                      </p>
                      <p className="px-1 text-xs border border-red-400">1500</p>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      <button className="flex items-center">
                        <p className="mr-1 px-1 rounded text-xs border bg-green-600 text-white">
                          Act: 2
                        </p>
                        <p className="px-1 text-xs border bg-red-600 text-white rounded">
                          RsvD: 0
                        </p>
                      </button>
                    </td>
                    <td className="text-sm text-gray-900 font-light py-4 ">
                      <p className="bg-green-600  text-white rounded text-center">
                        Sell
                      </p>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      <button className="flex items-center text-white bg-purple-800 rounded px-1">
                        <EyeIcon height="15" className="pr-1" /> View{" "}
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-gray-100 border-b text-sm">
                    <td className="px-3 py-4  text-sm  text-gray-900">
                      GRS - NRB
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      44 Seater
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      B
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      4:00 PM
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      NAIROBI
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      3:30 PM
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      Not Assigned
                    </td>

                    <td className="text-sm flex  text-gray-900 font-light px-3 py-4 ">
                      <p className="mr-1 px-1 text-xs border border-red-400">
                        1800
                      </p>
                      <p className="px-1 text-xs border border-red-400">1500</p>
                    </td>

                    <td className="text-sm  text-gray-900 font-light px-3 py-4 ">
                      <button className="flex items-center">
                        <p className="mr-1 px-1 rounded text-xs border bg-green-600 text-white">
                          Act: 2
                        </p>
                        <p className="px-1 text-xs border bg-red-600 text-white rounded">
                          RsvD: 0
                        </p>
                      </button>
                    </td>
                    <td className="text-sm text-gray-900 font-light py-4 ">
                      <p className="bg-green-600  text-white rounded text-center">
                        Sell
                      </p>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-4 ">
                      <button
                        
                        className="flex items-center text-white bg-purple-800 rounded px-1"
                      >
                        <EyeIcon height="15" className="pr-1" /> View{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
