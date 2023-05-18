import JobSearch from "../HomePage/JobSearch";
import JobList from "../HomePage/JobList";
import ResultFilters from "./ResultFilters";
import SortBy from "./SortBy";

export default function ResultsPage() {
  return (
    <div>
      <br />
      <JobSearch />
      <hr />
      <ResultFilters />
      <h4>
        {/* Search results - {results.length} Jobs for Software Developer in Belfast */}
      </h4>
      {/* <SortBy>Sort By</SortBy> */}
      <JobList />
      <div className="page-nav-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
