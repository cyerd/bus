

const fetcher = async () => {
  const bookedSeats = await fetch("/api/bookings");
  const data = await bookedSeats.json();
  const seats = data.seats;


  return seats;
};

export default fetcher;
