import { useContext } from "react";
import SavedJobsContext from "../context/savedJobs";

export default function useSavedJobsContext() {
  return useContext(SavedJobsContext);
}
