// import React, { useEffect } from 'react'
// import useSWR from 'swr';

// function ParcelList({ selectedDate, selectedTrip }) {

//   const params = `/api/getparcel`;

//   const fetcher = async () => {
//     const parcelDetails = await fetch(params);
//     const data = await parcelDetails.json();

//     return data;
//   };

//   const { data: Products, error, mutate } = useSWR(params, fetcher);

// //   useEffect(() => {}, [Products]);

//   return (
//     <div>
//       <table className="table flex justify-center items-center">
//         <thead>
//           <tr className="border">
//             <th className="border border-gray-400 bg-gray-800 text-white px-4">
//               ID
//             </th>
//             <th className="border border-gray-400 bg-gray-800 text-white px-4">
//               DATE
//             </th>
//             <th className="border border-gray-400 bg-gray-800 text-white px-4">
//               SEAT NO
//             </th>
//             <th className="border border-gray-400 bg-gray-800 text-white px-4">
//               FULL NAME
//             </th>
//             <th className="border border-gray-400 bg-gray-800 text-white px-4">
//               MOBILE NO
//             </th>
//             <th className="border border-gray-400 bg-gray-800 text-white px-4">
//               TOTAL PAID
//             </th>
//           </tr>
//         </thead>
//         {Products?.Products?.map((booking) => (
//           <tbody key={booking.id}>
//             <tr className="border w-full border-gray-400">
//               <td className="border   px-5  border-gray-400">
//                 {booking.seller}
//               </td>
//               <td className="border w-fit px-5 border-gray-400">
//                 {booking.stock}
//               </td>
//               <td className="border w-fit px-5 border-gray-400">
//                 {booking.ratings}
//               </td>
//               <td className="border w-fit px-5 border-gray-400">
//                 {booking.category}
//               </td>
//               <td className="border w-fit px-5 border-gray-400">
//                 {booking.price}
//               </td>
//               <td className="border w-fit px-5 border-gray-400">
//                 {booking.numOfReviews}
//               </td>
//             </tr>
//           </tbody>
//         ))}
//       </table>
//     </div>
//   );
// }

// export default ParcelList

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useSWR from "swr";
import Loading from "./Loading";

const columns = [
  { field: "from", headerName: "FROM", width: 70 },
  { field: "pickup", headerName: "PICKUP POINT", width: 130 },
  { field: "destination", headerName: "DESTINATION", width: 130 },
  { field: "sender", headerName: "SENDER", width: 150 },
  { field: "senderMobile", headerName: "SENDER MOBILE", width: 130 },
  { field: "receiver", headerName: "RECIVER", width: 130 },
  { field: "receiverMobile", headerName: "RECEIVER MOBILE", width: 130 },
  { field: "itemType", headerName: "ITEM TYPE", width: 130 },
  { field: "itemName", headerName: "ITEM NAME", width: 130 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ParcelList() {
  const [query, setQuery] = React.useState("");
  const fetcher = async () => {
    const ParcelList = await fetch(`/api/getparcel?receiver=${query}`);
    const data = await ParcelList.json();
    const parcels = data.parcelList;

    return parcels;
  };

  const {
    data: parcel,
    error,
    mutate,
  } = useSWR(`/api/getparcel?receiver=${query}`, fetcher);

  if (!parcel) {
    let parcel = [];
  }

  return (
    <div style={{ height: 650, width: "100%" }}>
      <div>
        <div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="search"
            placeholder="search"
            className="p-2 border border-gray-400 bg-purple-100  rounded-lg my-2 ml-5"
          />
        </div>
      </div>
      {parcel ? (
        <DataGrid
          className="bg-green-200"
          rows={parcel}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
