import { createContext, useEffect, useState } from "react";
import { getApplications, getSavedJobs } from "../APIs/jobs";
import useUserContext from "../hooks/useUserContext";

const SavedJobContext = createContext();

export function SavedJobProvider({ children }) {
  const { userData } = useUserContext();

  const [savedJobs, setSavedJobs] = useState({
    adref: "",
    title: "",
    company: "",
    salary: 0,
    location: "",
    category: "",
    contractTime: "",
    contractType: "",
    link: "",
  });
  const [applications, setApplications] = useState({
    adref: "",
    title: "",
    company: "",
    salary: 0,
    location: "",
    category: "",
    contractTime: "",
    contractType: "",
    link: "",
  });

  useEffect(() => {
    const savedJobs = getSavedJobs((res) => {
      setSavedJobs({
        adref: res.adRef,
        title: res.title,
        company: res.company,
        salary: res.salary,
        location: res.location,
        category: res.category,
        contractTime: res.contractTime,
        contractType: res.contractType,
        link: res.link,
      });
    });
  }, [userData.user]);

  useEffect(() => {
    const applications = getApplications((res) => {
      setApplications({
        adref: res.adRef,
        title: res.title,
        company: res.company,
        salary: res.salary,
        location: res.location,
        category: res.category,
        contractTime: res.contractTime,
        contractType: res.contractType,
        link: res.link,
      });
    });
  }, [userData.user]);

  const valuesToShare = {
    savedJobs,
    applications,
  };

  return (
    <SavedJobContext.Provider value={valuesToShare}>
      {children}
    </SavedJobContext.Provider>
  );
}

export default SavedJobContext;
