

const fetcher = async () => {
  const ParcelList = await fetch("/api/getparcel");
  const data = await ParcelList.json();
  const parcels = data.parcelList;


  return parcels;
};

export default fetcher;
