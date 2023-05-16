import axios from "axios";

//GET request to generate job listings from a search result
const JobResults = async (term, jobLocation) => {
  const response = await axios.get(
    "http://api.adzuna.com/v1/api/jobs/gb/search/1?content-type=application/json",
    {
      params: {
        app_id: "6c909a68",
        app_key: "27f3682a5ac4b72c7a816d5c568d14c6",
        results_per_page: 20,
        what: term,
        where: jobLocation,
      },
    }
  );
  return response.data.results;
};

export default JobResults;
