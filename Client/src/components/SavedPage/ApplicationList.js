import useSavedJobsContext from "../../hooks/useSavedJobsContext";
import ApplicationShow from "./ApplicationShow";

export default function ApplicationList() {
  const { applications, setApplications } = useSavedJobsContext();

  const renderedList = applications?.map((job) => {
    return <ApplicationShow key={job._id} job={job} />;
  });

  return <div>{renderedList}</div>;
}
