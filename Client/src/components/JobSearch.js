import JobInput from "./JobInput";
import { useState } from "react";
import { GoLocation } from "react-icons/go";
import Location from "../GeocodingAPI";
import "../CSS/JobSearch.css";

export default function JobSearch({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    jobLocation: "",
  });

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  Location(longitude, latitude);

  //Read up on why the setForm function works for multiple states
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.title, formData.jobLocation);
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <div className="job-search">
      <h1 className="job-search-title">Discover. Apply. Succeed.</h1>
      <h1 className="job-search-title"> Kickstart your career with us today</h1>
      <form className="job-input-form " onSubmit={handleFormSubmit}>
        <JobInput
          value={formData.title}
          id="title"
          onChange={handleChange}
          placeholder="  Job Title"
        />

        <JobInput
          value={formData.jobLocation}
          id="jobLocation"
          onChange={handleChange}
          placeholder="  Location"
        />
        <button
          type="button"
          onClick={handleLocation}
          className="job-location-button"
        >
          <GoLocation style={{ fontSize: "19px" }} />{" "}
        </button>
        <button type="submit" className="job-search-button">
          Search
        </button>
      </form>
      <h4>
        Unlock your potential and find your perfect match with us - your
        ultimate employment destination. Apply now!
      </h4>
      <hr className="job-hr" />
    </div>
  );
}
