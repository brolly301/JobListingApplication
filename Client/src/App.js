import { getTest } from "./functions/test";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./index.css";
import JobResults from "./AdzunaAPI";
import getLocation from "./GeocodingAPI";
import JobList from "./components/HomePage/JobList";

function App() {
  const [data, setData] = useState("Hello World");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  //Calls the test data a single time when the application is loaded and sets its state
  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <div className="app">
      {/* <HomePage
        onSubmit={handleSubmit}
        onLocationSubmit={handleLocationSubmit}
        location={location}
      /> */}
      <ResultsPage
        onSubmit={handleSubmit}
        onLocationSubmit={handleLocationSubmit}
        location={location}
        results={results}
      />
    </div>
  );
}

export default App;
