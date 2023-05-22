import JobInput from "./JobInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import "../../CSS/JobSearch.css";
import useJobsContext from "../../hooks/useJobsContext";

export default function JobSearch() {
  const { handleSubmit, handleLocationSubmit, location } = useJobsContext();

  const [formData, setFormData] = useState({
    title: "",
    jobLocation: "",
  });
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const redirect = useNavigate();

  //Read up on why the setForm function works for multiple states
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  //Using form data to generate job listings using API
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData.title, formData.jobLocation);
    redirect("/search");
  };

  //Get current location in co-ordinates and convert to location
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    handleLocationSubmit(longitude, latitude);
  };

  return (
    <div className="job-search">
      <form className="job-input-form " onSubmit={handleFormSubmit}>
        <JobInput
          value={formData.title}
          id="title"
          onChange={handleChange}
          placeholder="  Job Title"
        />
        <JobInput
          defaultValue={formData.jobLocation || location}
          id="jobLocation"
          onChange={handleChange}
          placeholder="Location"
        />
        <button
          type="button"
          onClick={handleLocation}
          className="job-location-button">
          <GoLocation style={{ fontSize: "19px" }} />
        </button>
        <button type="submit" className="job-search-button">
          Search
        </button>
      </form>
    </div>
  );
}
