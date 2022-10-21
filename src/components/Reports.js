import Image from "next/image";
import React from "react";
const navigation = [
  {
    id: "1",
    name: "Home",
    icon: "/book-parcel.png",
    color: "#675aaa",
  },
  {
    id: "2",
    name: "Cash Forward",
    icon: "/loading sheet.png",
    color: "#dcd806",
  },
  {
    id: "3",
    name: "Expenses",
    icon: "/parcel-list.png",
    color: "#1072ae",
  },
  {
    id: "1",
    name: "Home",
    icon: "/book-parcel.png",
    color: "#93ac0c",
  },
  {
    id: "2",
    name: "Cash Forward",
    icon: "/loading sheet.png",
    color: "#fbb043",
  },
  {
    id: "3",
    name: "Expenses",
    icon: "/parcel-list.png",
    color: "#ee181d",
  },
  {
    id: "2",
    name: "Cash Forward",
    icon: "/loading sheet.png",
    color: "#cf0a98",
  },
  {
    id: "3",
    name: "Expenses",
    icon: "/parcel-list.png",
    color: "#bab1b3",
  },
];
function Reports() {
  return (
       <div className="mx-2 border p-2 ">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Reports</h1>
        <h3 className="italic">View & Print Reports</h3>
      </div>
    <div className=" grid grid-cols-2  gap-x-2 md:grid-cols-4  xl:gap-x-4">
      {navigation.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-around items-center py-2"
        >
          <div
            className={`rounded-md text-black border-2 border-blue-400   flex justify-around px-5 py-2 h-full w-full items-center`}
            style={{ backgroundColor: item.color }}
          >
            <p> {item.name}</p>
            <Image src={item.icon} width="30" height="30" layout="fixed" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Reports;
