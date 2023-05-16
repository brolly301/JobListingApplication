import JobSearch from "./JobSearch";
import JobList from "./JobList";
import JobResults from "../../AdzunaAPI";
import JobCategories from "./JobCategories";
import Navbar from "../Navbar";
import Location from "../../GeocodingAPI";
import { useState } from "react";
import "../../CSS/JobSearch.css";

export default function HomePage({ location, setLocation }) {
  const [results, setResults] = useState([]);

  //Function for setting input as results of API call
  const handleSubmit = async (term, jobLocation) => {
    const result = await JobResults(term, jobLocation);
    setResults(result);
    console.log(results);
  };

  //Function for setting location input as results of API call
  const handleLocationSubmit = async (longitude, latitude) => {
    const result = await Location(longitude, latitude);
    setLocation(result.address.city || result.address.state);
  };

  return (
    <div className="job-search">
      <Navbar />
      <h1 className="job-search-title">Discover. Apply. Succeed.</h1>
      <h1 className="job-search-title"> Kickstart your career with us today</h1>
      <JobSearch
        onSubmit={handleSubmit}
        onLocationSubmit={handleLocationSubmit}
        location={location}
      />
      <h4>
        Unlock your potential and find your perfect match with us - your
        ultimate employment destination. Apply now!
      </h4>
      <hr className="job-hr" />
      {/* <JobList results={results} /> */}
      <JobCategories />
    </div>
  );
}
