import useSavedJobsContext from "../../hooks/useSavedJobsContext";
import SavedJobShow from "./SavedJobShow";

export default function SavedJobList() {
  const { savedJobs, setSavedJobs } = useSavedJobsContext();

  const renderedList = savedJobs?.map((job) => {
    return <SavedJobShow key={job._id} job={job} />;
  });

  return <div>{renderedList}</div>;
}
