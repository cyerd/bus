import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-1 border-t-1 border-gray-100 justify-center items-center ">
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        Powered by
        <span className="">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </Link>
    </footer>
  );
}
