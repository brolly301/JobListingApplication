import "../../CSS/HomePage/JobCategories.css";
import useJobsContext from "../../hooks/useJobsContext";
import useUserContext from "../../hooks/useUserContext";
import JobCategory from "./JobCategory";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobCategories() {
  const { handleSubmit, handleLocationSubmit, location } = useJobsContext();
  const [category, setCategory] = useState("");

  const { userData } = useUserContext();
  const redirect = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setCategory(e.currentTarget.getAttribute("data-value"));
    console.log(category);
    handleSubmit(category, userData.location || "Belfast");
    redirect("/search");
  };

  return (
    <div>
      <h3 className="job-category-title">Explore Careers</h3>
      <div className="job-category-container">
        <JobCategory
          onClick={handleClick}
          src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          data-value="Engineering"
        >
          Engineering
        </JobCategory>
        <JobCategory
          onClick={handleClick}
          src="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          data-value="Computing"
        >
          Computing
        </JobCategory>
        <JobCategory
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Business"
        >
          Business
        </JobCategory>
        <JobCategory
          src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1600"
          name="Finance"
        >
          Finance
        </JobCategory>
      </div>
      <div className="job-category-container">
        <JobCategory
          src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1600"
          name="Management"
        >
          Management
        </JobCategory>
        <JobCategory
          onClick={handleClick}
          src="https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Teaching"
        >
          Teaching
        </JobCategory>
        <JobCategory
          src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Medical"
        >
          Medical
        </JobCategory>
        <JobCategory
          src="https://images.pexels.com/photos/7581123/pexels-photo-7581123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Human Resources"
        >
          Human Resources
        </JobCategory>
      </div>
    </div>
  );
}
