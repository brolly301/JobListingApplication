import JobSearch from "./JobSearch";
import JobCategories from "./JobCategories";
import Navbar from "../Navbar";
import "../../CSS/JobSearch.css";

export default function HomePage({ onSubmit, onLocationSubmit, location }) {
  return (
    <div className="job-search">
      <Navbar />
      <h1 className="job-search-title">Discover. Apply. Succeed.</h1>
      <h1 className="job-search-title"> Kickstart your career with us today</h1>
      <JobSearch
        onSubmit={onSubmit}
        onLocationSubmit={onLocationSubmit}
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
