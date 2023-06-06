import "../../CSS/HomePage/JobTiles.css";
import cv from "../../images/cv.png";
import register from "../../images/register.png";
import apply from "../../images/apply.png";
import { Link } from "react-router-dom";

export default function JobTiles() {
  return (
    <div className="tile-container">
      <div className="tile-section">
        <h3>Apply</h3>
        <Link to={"/search"}>
          <img src={apply} alt="" />
        </Link>
      </div>
      <div className="tile-section">
        <h3>Register</h3>
        <Link to={"/register"}>
          {" "}
          <img src={register} alt="" />
        </Link>
      </div>
      <div className="tile-section">
        <h3>Upload CV</h3>
        <Link to={"/login"}>
          <img src={cv} alt="" />
        </Link>
      </div>
    </div>
  );
}
