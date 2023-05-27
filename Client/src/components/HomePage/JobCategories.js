import "../../CSS/HomePage/JobCategories.css";
import useJobsContext from "../../hooks/useJobsContext";
import useUserContext from "../../hooks/useUserContext";
import JobCategory from "./JobCategory";
import { useNavigate } from "react-router-dom";

export default function JobCategories() {
  const { handleSubmit, handleLocationSubmit, location } = useJobsContext();
  const { userData } = useUserContext();
  const redirect = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit("Engineering", userData.location || "Belfast");
    redirect("/search");
  };

  return (
    <div>
      <h3 className="job-category-title">Explore Careers</h3>
      <div className="job-category-container">
        <JobCategory
          onClick={handleClick}
          src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          Engineering
        </JobCategory>
        <JobCategory src="https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          Computing
        </JobCategory>
        <JobCategory src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          Business
        </JobCategory>
        <JobCategory src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1600">
          Finance
        </JobCategory>
      </div>
      <div className="job-category-container">
        <JobCategory src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1600">
          Management
        </JobCategory>
        <JobCategory src="https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          Teaching
        </JobCategory>
        <JobCategory src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          Medical
        </JobCategory>
        <JobCategory src="https://images.pexels.com/photos/7581123/pexels-photo-7581123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          Human Resources
        </JobCategory>
      </div>
    </div>
  );
}
