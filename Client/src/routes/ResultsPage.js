import JobSearch from "../components/HomePage/JobSearch";
import JobList from "../components/HomePage/JobList";
import ResultFilters from "../components/ResultsPage/ResultFilters";
import SortBy from "../components/ResultsPage/SortBy";

export default function ResultsPage() {
  return (
    <div>
      <br />
      <JobSearch />
      <hr className="hr" />
      <ResultFilters />
      <h4 className="search-results">
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
