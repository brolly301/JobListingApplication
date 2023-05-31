import { createContext, useEffect, useState } from "react";
import { getApplications, getSavedJobs } from "../APIs/jobs";
import useUserContext from "../hooks/useUserContext";

const SavedJobsContext = createContext();

export function SavedJobsProvider({ children }) {
  const { userData } = useUserContext();

  const [savedJobs, setSavedJobs] = useState([]);

  const [applications, setApplications] = useState([]);

  const updateJobs = (state, job) => {
    state((jobs) => [...jobs, job]);
  };

  useEffect(() => {
    const saveJobs = getSavedJobs().then((res) => setSavedJobs(res));
  }, [userData.user || savedJobs]);

  useEffect(() => {
    const applications = getApplications().then((res) => setApplications(res));
  }, [userData.user || applications]);

  const valuesToShare = {
    savedJobs,
    applications,
    setSavedJobs,
    setApplications,
    updateJobs,
  };

  return (
    <SavedJobsContext.Provider value={valuesToShare}>
      {children}
    </SavedJobsContext.Provider>
  );
}

export default SavedJobsContext;
