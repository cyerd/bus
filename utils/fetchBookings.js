

const fetcher = async () => {
  const params = `/api/bookings/${query}`;
  const bookedSeats = await fetch(params);
  const data = await bookedSeats.json();
  const seats = data;


  return seats;
};

export default fetcher;
