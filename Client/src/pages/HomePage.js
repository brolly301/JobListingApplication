import JobSearch from "../components/HomePage/JobSearch";
import JobCategories from "../components/HomePage/JobCategories";
import "../CSS/HomePage/JobSearch.css";

export default function HomePage() {
  return (
    <div className="job-search">
      <h1 className="job-search-title">Discover. Apply. Succeed.</h1>
      <h1 className="job-search-title"> Kickstart your career with us today</h1>
      <JobSearch />
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
