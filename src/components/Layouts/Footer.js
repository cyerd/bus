import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-1 border-t-1 border-gray-100 justify-center items-center ">
      <Link
        href="shop/productpage"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <p className="italic text-lg bg-slate-200 rounded-lg m-2 p-4">
          {" "}
          Developed and Maintained by{" "}
          <span className="font-bold"> HUDHEYFA CYERD</span>{" "}
        </p>
        <span className="ml-5">
          <Image src="/main.svg" alt="Vercel Logo" width={50} height={30} />
        </span>
      </Link>
    </footer>
  );
}
