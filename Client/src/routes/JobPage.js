import useJobsContext from "../hooks/useJobsContext";
import JobDescription from "../components/JobPage/JobDescription";
import JobDetails from "../components/JobPage/JobDetails";
import JobSearch from "../components/HomePage/JobSearch";
import { useLocation } from "react-router-dom";

export default function JobPage() {
  // const { results } = useJobsContext();
  const location = useLocation();
  const result = location.state.result;

  return (
    <div>
      <br />
      <JobSearch />
      <hr />
      <JobDetails result={result} />
      <JobDescription />
    </div>
  );
}
