import JobSearch from "../HomePage/JobSearch";
import Navbar from "../Navbar";
import JobList from "../HomePage/JobList";

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
      <JobList results={results} />
    </div>
  );
}
