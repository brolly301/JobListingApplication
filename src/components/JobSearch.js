import JobInput from "./JobInput";
import { useState } from "react";

import "../CSS/JobSearch.css";

export default function JobSearch({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
  });

  //Read up on why the setForm function works for multiple states
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.title);
  };

  return (
    <div className="job-search">
      <div className="job-search-title">Job Search</div>
      <form onSubmit={handleFormSubmit}>
        <JobInput
          value={formData.title}
          id="title"
          onChange={handleChange}
          placeholder="  Job Title"
        />
        <JobInput
          value={formData.category}
          id="category"
          onChange={handleChange}
          placeholder="  Category"
        />
        <JobInput
          value={formData.location}
          id="location"
          onChange={handleChange}
          placeholder="  Location"
        />
        <button className="job-search-button">Search for Jobs</button>
      </form>
    </div>
  );
}
