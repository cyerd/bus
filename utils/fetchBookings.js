

const fetcher = async () => {
  const BookedSeats = await fetch("/api/getBookings");
  const data = await BookedSeats.json();
  const seats = data.seats;


  return seats;
};

export default fetcher;
