import { useContext } from "react";
import JobsContext from "../context/jobs";

function useJobsContext() {
  return useContext(JobsContext);
}

export default useJobsContext;
