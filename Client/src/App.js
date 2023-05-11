import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import JobResults from "./AdzunaAPI";
import JobCategories from "./components/JobCategories";
import { getTest } from "./functions/test";
import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Location from "./GeocodingAPI";

function App() {
  const [results, setResults] = useState([]);
  const [data, setData] = useState("Hello World");
  const [location, setLocation] = useState("");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (term, jobLocation) => {
    const result = await JobResults(term, jobLocation);
    setResults(result);
    console.log(results);
  };

  const handleLocationSubmit = async (longitude, latitude) => {
    const result = await Location(longitude, latitude);
    setLocation(result.address.city);
  };

  return (
    <div className="app">
      <Navbar />
      <JobSearch
        onSubmit={handleSubmit}
        onLocationSubmit={handleLocationSubmit}
        location={location}
      />
      {/* <JobList results={results} /> */}
      <JobCategories />
    </div>
  );
}

export default App;
