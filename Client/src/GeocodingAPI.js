import axios from "axios";

const Location = async (longitude, latitude) => {
  const response = await axios.get("https://geocode.maps.co/reverse?", {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });
  console.log(response);
  return response.data.address;
};

export default Location;
