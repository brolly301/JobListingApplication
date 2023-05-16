import JobShow from "./JobShow";
import "../../CSS/JobList.css";

export default function JobList({ results }) {
  const renderedList = results.map((result) => {
    return <JobShow key={result.adref} result={result} />;
  });

  return <div className="job-list">{renderedList}</div>;
}
