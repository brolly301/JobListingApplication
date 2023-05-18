import JobShow from "./JobShow";
import "../../CSS/JobList.css";
import useJobsContext from "../../hooks/useJobsContext";

export default function JobList() {
  const { results } = useJobsContext();

  const renderedList = results?.map((result) => {
    return <JobShow key={result.adref} result={result} />;
  });

  return <div className="job-list">{renderedList}</div>;
}
