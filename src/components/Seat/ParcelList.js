import React, { useEffect } from 'react'
import useSWR from 'swr';

function ParcelList({ selectedDate, selectedTrip }) {



  const params = `/api/getparcel`;

  const fetcher = async () => {
    const parcelDetails = await fetch(params);
    const data = await parcelDetails.json();

    return data;
  };

  const { data: Products, error, mutate } = useSWR(params, fetcher);

  useEffect(() => {}, [Products]);

  return (
    <div>
      <table class="table flex mx-5 justify-center items-center">
        <thead>
          <tr className="border">
            <th className="border border-gray-400 bg-gray-800 text-white px-4">
              ID
            </th>
            <th className="border border-gray-400 bg-gray-800 text-white px-4">
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
          </tr>
        </thead>
        {Products?.Products?.map((booking) => (
          <tbody key={booking.name}>
            <tr className="border w-full border-gray-400">
              <td className="border text-clip overflow-hidden w-10 h-10 px-5  border-gray-400">
                {booking.name}
              </td>
              <td className="border w-fit px-5 border-gray-400">
                {booking.stock}
              </td>
              <td className="border w-fit px-5 border-gray-400">
                {booking.ratings}
              </td>
              <td className="border w-fit px-5 border-gray-400">
                {booking.category}
              </td>
              <td className="border w-fit px-5 border-gray-400">
                {booking.price}
              </td>
              <td className="border w-fit px-5 border-gray-400">
                {booking.numOfReviews}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default ParcelList