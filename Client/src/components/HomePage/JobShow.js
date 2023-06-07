import "../../CSS/HomePage/JobShow.css";
import { MdLocationOn, MdPerson, MdCategory } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { results } from "../../APIs/jobs";

export default function JobShow({ result }) {
  return (
    <div className="job-show">
      <Link
        to={`/search/result/${result.adref.slice(-20)}`}
        state={{ result: result }}>
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
      </Link>
    </div>
  );
}
