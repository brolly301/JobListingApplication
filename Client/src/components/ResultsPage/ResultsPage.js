import JobSearch from "../HomePage/JobSearch";
import Navbar from "../Navbar";

export default function ResultsPage() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: 20 }}>
        <JobSearch />
      </div>
    </div>
  );
}
