import "../../CSS/HomePage/JobShow.css";
import { MdLocationOn, MdPerson, MdCategory } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function JobShow({ result }) {
  const redirect = useNavigate();

  const handleClick = (e) => {
    console.log("Clicked");
    redirect(`/search/result/${result.adref}`);
    //function to send the relevant data to this page through API
  };

  return (
    <div className="job-show" onClick={handleClick}>
      <a href={`/search/result/${result.adref}`}>
        <div className="job-title">
          <h3>{result.title}</h3>
        </div>
        <div className="job-detail-container">
          <div className="job-detail">
            <h4>
              <MdPerson className="icon" /> {result.company.display_name}
            </h4>
          </div>
          <div className="job-detail">
            <h4>
              <BiMoney className="icon" />£
              {Math.round(result.salary_max / 1000) * 1000}
            </h4>
          </div>
        </div>
        <div className="job-detail-container">
          <div className="job-detail">
            <h4>
              <MdLocationOn className="icon" /> {result.location.display_name}
            </h4>
          </div>
          <div className="job-detail">
            <h4>
              <MdCategory className="icon" />{" "}
              {result.category.label.replace("Jobs", "")}
            </h4>
          </div>
        </div>
        <div className="vl" />

        <div className="job-image-container">
          <img
            className="job-show-image"
            src="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </a>
    </div>
  );
}
