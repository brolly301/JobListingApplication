import axios from "axios";

//GET request to generate a location name from latitude and longitude co-ordinates
const getLocation = async (longitude, latitude) => {
  const response = await axios.get("https://geocode.maps.co/reverse?", {
    params: {
      lat: latitude || 0,
      lon: longitude || 0,
    },
  });
  console.log(response.data);
  return response.data;
};

export default getLocation;
