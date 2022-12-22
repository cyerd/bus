"use client";

import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  BanknotesIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  PlusCircleIcon,
  PrinterIcon,
  ShieldExclamationIcon,
  TicketIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const userNavigation = [
  { name: "Your Profile", icon: UserCircleIcon, href: "#" },
  { name: "Settings", icon: Cog6ToothIcon, href: "#" },
  { name: "Sign out", icon: ArrowRightOnRectangleIcon, href: "#" },
];

const ticket = [
  {
    name: "Book Ticket",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/tickets/bookticket",
    icon: PlusCircleIcon,
  },
  {
    name: "Booking List",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Advance Bookin",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Edit Ticket Report",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Ticket Print Report",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: PrinterIcon,
  },
];

const parcel = [
  {
    name: "Book Parcel",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/parcel/addparcel",
    icon: PlusCircleIcon,
  },
  {
    name: "Parcel List",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Advance Parcel Booking",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: BanknotesIcon,
  },
  {
    name: "Edit Parcel Report",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Parcel Print Report",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: PrinterIcon,
  },
];

const report = [
  {
    name: "Sales Report",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: BriefcaseIcon,
  },
  {
    name: "Ticket Report",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: TicketIcon,
  },
  {
    name: "Activity Report",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarDaysIcon,
  },
  {
    name: "Security Report",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldExclamationIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-3  md:justify-start md:space-x-5">
          <div className="  hidden lg:flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Online Bus Service</span>
              <Image
                width="50"
                height="30"
                className="h-8 w-auto sm:h-10 "
                src="/main.svg"
                alt="Logo"
                media="(prefers-color-scheme: dark)"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-5 items-center md:flex "
          >
            <Link href="/">
              <button className="group flex flex-col items-center rounded-md bg-white  text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Image
                  src="/Dashboard.png"
                  height="30"
                  width="30"
                  className="ml-2 h-5 w-5  group-hover:text-gray-500"
                  aria-hidden="true"
                  alt="Dashboard"
                />
                <span>Dashboard</span>
              </button>
            </Link>
            <Link href="/schedule/schedule">
              <button className="group flex flex-col items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Image
                  src="/Bus-Schedule.png"
                  height="30"
                  width="30"
                  className="ml-2 h-5 w-5 group-hover:text-gray-500"
                  aria-hidden="true"
                  alt="schedule"
                />
                <span>Schedule</span>
              </button>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-black",
                      "group flex flex-col items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    <Image
                      src="/Booking.png"
                      height="30"
                      width="30"
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                      alt="booking"
                    />
                    <span>Bookings</span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {ticket.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-green-700"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-black",
                      "group flex flex-col items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    <Image
                      src="/Consigment.png"
                      height="30"
                      width="30"
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                      alt="parcel"
                    />
                    <span>Parcel</span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {parcel.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-green-700"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/trips/trip">
              <button className="group flex  flex-col  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Image
                  src="/Trip.png"
                  height="30"
                  width="30"
                  className="ml-2 h-5 w-5 group-hover:text-gray-500"
                  aria-hidden="true"
                  alt="trip"
                />
                <span>Trip</span>
              </button>
            </Link>
            <Link href="/expenses/expense">
              <button className="group flex  flex-col  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Image
                  src="/Exepnse.png"
                  height="30"
                  width="30"
                  className="ml-2 h-5 w-5 group-hover:text-gray-500"
                  aria-hidden="true"
                  alt="expense"
                />
                <span>Expense</span>
              </button>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-black",
                      "group flex flex-col items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    <Image
                      src="/Reports.png"
                      height="30"
                      width="30"
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                      alt="reports"
                    />
                    <span>Report</span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {report.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-green-700"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/recons/reconciliation">
              <button className="group flex  flex-col  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Image
                  src="/Expense-Tracking.png"
                  height="30"
                  width="30"
                  className="ml-2 h-5 w-5 group-hover:text-gray-500"
                  aria-hidden="true"
                  alt="reconciliation"
                />
                <span>Reconciliation</span>
              </button>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end  md:flex md:flex-1 lg:w-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex items-center  ">
                  <span className="sr-only">Open user menu</span>

                  <p className="capitalize font-bold text-md p-2 rounded-xl text-clip overflow-hidden">
                    hudheyfa cyerd
                  </p>
                  <ChevronDownIcon height={20} />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <span className="flex items-center pl-4">
                          <item.icon height="19" />
                          <Link
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </Link>
                        </span>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className=" inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 bg-white z-40 block">
                {/* <nav className="grid gap-y-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <button className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                        <Image
                          height="20"
                          width="20"
                          src={item.Icon}
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                          alt="iconmenu"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </button>
                    </Link>
                  ))}
                </nav> */}

                <Popover.Group as="nav" className=" space-y-5  flex flex-col ">
                  <Link href="/">
                    <button className="group flex space-x-5  items-center rounded-md bg-white  text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Image
                        src="/Dashboard.png"
                        height="30"
                        width="30"
                        className="ml-2 h-5 w-5  group-hover:text-gray-500"
                        aria-hidden="true"
                        alt="Dashboard"
                      />
                      <span>Dashboard</span>
                    </button>
                  </Link>
                  <Link href="/schedule/schedule">
                    <button className="group flex  space-x-5  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Image
                        src="/Bus-Schedule.png"
                        height="30"
                        width="30"
                        className="ml-2 h-5 w-5 group-hover:text-gray-500"
                        aria-hidden="true"
                        alt="schedule"
                      />
                      <span>Schedule</span>
                    </button>
                  </Link>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-black",
                            "group flex space-x-5  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <Image
                            src="/Booking.png"
                            height="30"
                            width="30"
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                            alt="booking"
                          />
                          <span>Bookings</span>
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {ticket.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 text-green-700"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-black",
                            "group flex space-x-5 items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <Image
                            src="/Consigment.png"
                            height="30"
                            width="30"
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                            alt="parcel"
                          />
                          <span>Parcel</span>
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {parcel.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 text-green-700"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link href="/trips/trip">
                    <button className="group flex  space-x-5  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Image
                        src="/Trip.png"
                        height="30"
                        width="30"
                        className="ml-2 h-5 w-5 group-hover:text-gray-500"
                        aria-hidden="true"
                        alt="trip"
                      />
                      <span>Trip</span>
                    </button>
                  </Link>
                  <Link href="/expenses/expense">
                    <button className="group flex  space-x-5  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Image
                        src="/Exepnse.png"
                        height="30"
                        width="30"
                        className="ml-2 h-5 w-5 group-hover:text-gray-500"
                        aria-hidden="true"
                        alt="expense"
                      />
                      <span>Expense</span>
                    </button>
                  </Link>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-black",
                            "group flex space-x-5 items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          )}
                        >
                          <Image
                            src="/Reports.png"
                            height="30"
                            width="30"
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                            alt="reports"
                          />
                          <span>Report</span>
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {report.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 text-green-700"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link href="/recons/reconciliation">
                    <button className="group flex  space-x-5  items-center rounded-md bg-white text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Image
                        src="/Expense-Tracking.png"
                        height="30"
                        width="30"
                        className="ml-2 h-5 w-5 group-hover:text-gray-500"
                        aria-hidden="true"
                        alt="reconciliation"
                      />
                      <span>Reconciliation</span>
                    </button>
                  </Link>
                </Popover.Group>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  href="/Account/profile"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Profile
                </Link>

                <Link
                  href="/Account/settings"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Settings
                </Link>
              </div>
              <div>
                <Link
                  href="/login"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
