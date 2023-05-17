import JobSearch from "../HomePage/JobSearch";
import Navbar from "../Navbar";
import JobList from "../HomePage/JobList";
import ResultFilters from "./ResultFilters";
import SortBy from "./SortBy";

export default function ResultsPage({
  onSubmit,
  onLocationSubmit,
  location,
  results,
}) {
  return (
    <div>
      <Navbar />
      <br />
      <JobSearch
        onSubmit={onSubmit}
        onLocationSubmit={onLocationSubmit}
        location={location}
      />
      <hr />
      <ResultFilters />
      <h4>
        Search results - {results.length} Jobs for Software Developer in Belfast
      </h4>
      {/* <SortBy>Sort By</SortBy> */}
      <JobList results={results} />
      <div className="page-nav-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
