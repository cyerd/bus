import Image from "next/image";
import Link from "next/link";
import React from "react";
const navigation = [
  {
    id: "1",
    name: "Parcel Report",
    icon: "/parcel-report.png",
    color: "#675aaa",
    href: "/reports/parcelreport",
  },
  {
    id: "2",
    name: "Sales Report",
    icon: "/sales-report.png",
    color: "#dcd806",
    href: "/reports/salesreport",
  },
  {
    id: "3",
    name: "Bank Report",
    icon: "/bank-report.png",
    color: "#1072ae",
    href: "/reports/bankreport",
  },
  {
    id: "4",
    name: "Vehicle Collection",
    icon: "/vehicle-collection.png",
    color: "#93ac0c",
    href: "/reports/vehiclecollection",
  },
  {
    id: "5",
    name: "Ticket Report",
    icon: "/ticket-report.png",
    color: "#fbb043",
    href: "/reports/ticketreport",
  },
  {
    id: "6",
    name: "Trip Report",
    icon: "/trip-report.png",
    color: "#ee181d",
    href: "/reports/tripreport",
  },
  {
    id: "7",
    name: "Dispatch Report",
    icon: "/dispatch-report.png",
    color: "#cf0a98",
    href: "/reports/dispatchreport",
  },
  {
    id: "8",
    name: "Ticket Inspection",
    icon: "/ticket-inspecton.png",
    color: "#bab1b3",
    href: "/reports/ticketinspection",
  },
];
function Reports() {
  return (
    <div className="mx-2 border p-2 rounded-lg rounded border-2 border-gray-400 mt-2 ">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Reports</h1>
        <h3 className="italic">View & Print Reports</h3>
      </div>
      <div className=" grid grid-cols-2  gap-x-4 gap-y-3 md:grid-cols-4  xl:gap-x-4">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="flex flex-col justify-between items-center py-5 overflow-auto"
          >
            <button
              className="rounded-md text-white flex justify-around  px-5 py-2 h-full w-full items-center"
              style={{ backgroundColor: item.color }}
            >
              <p> {item.name}</p>
              <Image src={item.icon} width="30" height="30" layout="fixed"  alt="icons"/>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Reports;
