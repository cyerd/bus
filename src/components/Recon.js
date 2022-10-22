import Image from "next/image";
import React from "react";
const navigation = [
  {
    id: "1",
    name: "Home",
    icon: "/reconciliation.png",

  },
  {
    id: "2",
    name: "Cash Forward",
    icon: "/cash-forward.png",
  
  },
  {
    id: "3",
    name: "Expenses",
    icon: "/expense.png",
 
  },
  {
    id: "4",
    name: "Bank",
    icon: "/bank.png",
 
  },
  {
    id: "5",
    name: "Branch Status",
    icon: "/branch-status.png",
  
  },
  {
    id: "6",
    name: "Cash Received",
    icon: "/cash-received.png",

  },
  {
    id: "7",
    name: "User Statement",
    icon: "/user-statement.png",
    color: "yellow-800",
  },
  {
    id: "8",
    name: "Mpesa",
    icon: "/mpesa.png",
    color: "gray-700",
  },
];
function Recon() {
  return (
    <div className="mx-2 border p-5 rounded-lg ">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Reconciliation</h1>
        <h3 className="italic">Reconcile all your accounts</h3>
      </div>
      <div className="grid grid-cols-2  gap-x-2 md:grid-cols-4  xl:gap-x-4">
        {navigation.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-around items-center py-2"
          >
            <div
              className={` rounded-md  text-black border-2 border-blue-400   flex justify-around px-5 py-2 h-full w-full items-center`}
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

export default Recon;
