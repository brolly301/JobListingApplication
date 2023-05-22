import { useContext } from "react";
import JobsContext from "../context/jobs";

export default function useJobsContext() {
  return useContext(JobsContext);
}
