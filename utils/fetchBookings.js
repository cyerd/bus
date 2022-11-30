

const fetcher = async () => {
  const bookedSeats = await fetch("/api/bookings");
  const data = await bookedSeats.json();
  const seats = data;


  return seats;
};

export default fetcher;
