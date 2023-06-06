import { createContext, useEffect, useState } from "react";
import JobResults from "../functions/AdzunaAPI";
import getLocation from "../functions/GeocodingAPI";

const JobsContext = createContext();

export function JobProvider({ children }) {
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  //Function for setting input as results of API call
  const handleSubmit = async (term, jobLocation) => {
    const result = await JobResults(term, jobLocation);
    setResults(result);
    console.log(result);
  };

  //Function for setting location input as results of API call
  const handleLocationSubmit = async (longitude, latitude) => {
    const result = await getLocation(longitude, latitude);
    setLocation(result.address.city || result.address.state);
  };

  const handleLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    await handleLocationSubmit(longitude, latitude);
  };

  const valueToShare = {
    location,
    results,
    handleSubmit,
    handleLocation,
  };

  return (
    <JobsContext.Provider value={valueToShare}>{children}</JobsContext.Provider>
  );
}

export default JobsContext;
