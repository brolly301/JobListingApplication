export const submitApplication = async ({
  adRef,
  title,
  company,
  salary,
  location,
  category,
  contractTime,
  contractType,
  link,
} = {}) => {
  const application = {
    adRef,
    title,
    company,
    salary,
    location,
    category,
    contractTime,
    contractType,
    link,
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/job/apply`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      }
    );
    return await response.json();
  } catch (err) {}
};

export const saveJob = async ({
  adRef,
  title,
  company,
  salary,
  location,
  category,
  contractTime,
  contractType,
  link,
} = {}) => {
  const savedJob = {
    adRef,
    title,
    company,
    salary,
    location,
    category,
    contractTime,
    contractType,
    link,
  };

  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/job/save`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savedJob),
    });
    return await response.json();
  } catch (err) {}
};

export const getSavedJobs = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/job/savedJobs`,
      {
        credentials: "include",
        method: "GET",
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};

export const getApplications = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/job/applications`,
      {
        credentials: "include",
        method: "GET",
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error("This has failed.");
  }
};
