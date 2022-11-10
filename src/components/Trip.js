import { Trips } from "./SeatConstants";


export default function Trip({ trip, onChange }) {
  return (
    <div className="Trip">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="trip"
        value={trip.name}
        onChange={(e) => {
          onChange(Trips.find((trip) => trip.name === e.target.value));
        }}
      >
        {Trips.map((trip) => (
          <option key={trip.name} value={trip.name}>
            {trip.name} (${trip.price})
          </option>
        ))}
      </select>
    </div>
  );
}