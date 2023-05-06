import "../CSS/JobShow.css";
import { MdLocationOn } from "react-icons/md";
import { BiMoney } from "react-icons/bi";

export default function JobShow({ result }) {
  return (
    <div className="job-show">
      <div>Title: {result.title}</div>
      <div>
        <MdLocationOn /> {result.location.display_name}
      </div>
      <div>
        <BiMoney /> £{Math.round(result.salary_max / 1000) * 1000}
      </div>
      <div>Category: {result.category.label.replace("Jobs", "")}</div>
    </div>
  );
}
