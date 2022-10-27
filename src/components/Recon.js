import Image from "next/image";
import Link from "next/link";
import React from "react";
const navigation = [
  {
    id: "1",
    name: "Home",
    icon: "/reconciliation.png",
    href: "/recons/reconciliation",
  },
  {
    id: "2",
    name: "Cash Forward",
    icon: "/cash-forward.png",
    href: "/recons/cashforward",
  },
  {
    id: "3",
    name: "Expenses",
    icon: "/expense.png",
    href: "/recons/expenses",
  },
  {
    id: "4",
    name: "Bank",
    icon: "/bank.png",
    href: "/recons/bank",
  },
  {
    id: "5",
    name: "Branch Status",
    icon: "/branch-status.png",
    href: "/recons/branchstatus",
  },
  {
    id: "6",
    name: "Cash Received",
    icon: "/cash-received.png",
    href: "/recons/cashreceived",
  },
  {
    id: "7",
    name: "User Statement",
    icon: "/user-statement.png",
    color: "yellow-800",
    href: "#",
    disabled: true,
  },
  {
    id: "8",
    name: "Mpesa",
    icon: "/mpesa.png",
    color: "gray-700",
    href: "/recons/mpesa",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Recon() {
  return (
    <div className="mx-2  p-5 rounded-lg  border-2 border-gray-400 mt-2">
      <div className="flex flex-col text-green-700 text-lg mb-3">
        <h1 className="font-bold">Reconciliation</h1>
        <h3 className="italic">Reconcile all your accounts</h3>
      </div>
      <div className="grid grid-cols-2  gap-x-2 gap-y-3 md:grid-cols-4  xl:gap-x-4">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="flex flex-col justify-around items-center py-2 "
          >
            <button
              className={classNames(
                item.disabled
                  ? "bg-blend-lighten text-gray-500 border-gray-300 cursor-not-allowed"
                  : "text-black border-blue-400 ",
                "flex justify-around px-2 py-2 h-full w-full items-center border-2 rounded-md"
              )}
              // className="   text-black border-2 border-blue-400   flex justify-around px-2 py-2 h-full w-full items-center"
            >
              <p> {item.name}</p>
              <Image src={item.icon} width="30" height="30" layout="fixed" alt="menuicon"/>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recon;
