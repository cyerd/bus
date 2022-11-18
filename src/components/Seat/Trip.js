import { Trips } from "./SeatConstants";


export default function Trip({ trip, onChange }) {
  return (
    <div className="Trip">
      <label htmlFor="movie">Select Trip: </label>
      <select
        className="bg-gray-300 px-3 mx-2 rounded border-2 border-gray-400 mb-2"
        id="trip"
        value={trip.name}
        onChange={(e) => {
          onChange(Trips.find((trip) => trip.name === e.target.value));
        }}
      >
        {Trips.map((trip) => (
          <option key={trip.name} value={trip.name}>
            {trip.name} (Ksh {trip.price})
          </option>
        ))}
      </select>
    </div>
  );
}