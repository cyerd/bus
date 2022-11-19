import { EyeIcon } from "@heroicons/react/20/solid";
import { DataGrid } from "@mui/x-data-grid";
import { Trips } from "./SeatConstants";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "ROUTE", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

export default function Trip({ trip, onChange }) {
  return (
    <div className="overflow-auto">
      <div className="flex bg-black text-white font-bold w-full justify-evenly p-1">
        <div className="">ROUTE</div>
        <div className="">FLEET</div>
        <div className="">SERIES</div>
        <div className="">DEPATURE</div>
        <div className=" ">TO</div>
        <div className=" ">COST</div>
        <div className="">MANIFEST</div>
      </div>

      {Trips.map((trip) => (
        <div className="flex items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              onChange(
                Trips.find((trip) => trip.name === e.currentTarget.value)
              );
            }}
            key={trip.name}
            value={trip.name}
            className="flex  hover:bg-pink-100 focus:bg-pink-300 justify-evenly w-full py-2 "
          >
            <div className="flex flex-col mr-16 ">GRS-NBI</div>
            <div className="flex flex-col mr-20 pl-6">44 Seater</div>
            <div className="flex flex-col mr-20 pl-6">A</div>
            <div className="flex flex-col mr-20 pl-20">{trip.name}</div>
            <div className="flex flex-col mr-32 pl-20">NAIROBI</div>
            <div className="flex mr-2 ">
              <button className=" border border-red-400 px-1">1500</button>
              <button className="mx-2 border border-red-400 px-1">1800</button>
            </div>

            <button
              onClick={() => {
                alert("hello");
              }}
              className="flex items-center mr-20 pl-6 text-center text-white bg-purple-600  px-2 rounded-lg"
            >
              <p className="pr-2 text-center">View</p> <EyeIcon height={20} />{" "}
            </button>
          </button>
        </div>
      ))}
    </div>
  );
}
