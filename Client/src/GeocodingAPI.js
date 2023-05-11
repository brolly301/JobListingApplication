import axios from "axios";

const Location = async (longitude, latitude) => {
  const response = await axios.get("https://geocode.maps.co/reverse?", {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });
  return response.data;
};

export default Location;

// This works but not fully, need to find out how to get the location notification
// to come back up and show the location on first click instead of second
