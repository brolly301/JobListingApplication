import JobSearch from "../HomePage/JobSearch";
import Navbar from "../Navbar";
import JobList from "../HomePage/JobList";
import ResultFilters from "./ResultFilters";

export default function ResultsPage({
  onSubmit,
  onLocationSubmit,
  location,
  results,
}) {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: 20 }}>
        <JobSearch
          onSubmit={onSubmit}
          onLocationSubmit={onLocationSubmit}
          location={location}
        />
      </div>
      <hr style={{ marginTop: 30, paddingBottom: 10 }} />
      <ResultFilters />
      <JobList results={results} />
    </div>
  );
}
