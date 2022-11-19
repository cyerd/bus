import { Trips } from "./SeatConstants";

export default function Trip({ trip, onChange }) {
  return (
    <div className="Trip">
      {Trips.map((trip) => (
        <div className="flex">
          <button
            onClick={(e) => {
              onChange(Trips.find((trip) => trip.name === e.target.value));
            }}
            key={trip.name}
            value={trip.name}
          >
            {" "}
            {trip.name}
          </button>
        </div>
      ))}
    </div>
  );
}
