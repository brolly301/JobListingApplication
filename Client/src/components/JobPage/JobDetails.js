import "../../CSS/JobPage/JobDetails.css";

export default function JobDetails({ result }) {
  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="job-details-container">
      <h1>{result.title}</h1>
      <div className="job-details-row">
        <div className="job-details-col">
          <h2>{result.company.display_name}</h2>
          <h2>£{Math.round(result.salary_max / 1000) * 1000}</h2>
          <h2>{result.location.display_name}</h2>
        </div>
        <div className="job-details-col">
          <h2>{result.category.label.replace("Jobs", "")}</h2>
          <h2>{capitalise(result.contract_time.replace("_", " "))}</h2>
          <h2>{capitalise(result.contract_type)}</h2>
        </div>
      </div>
    </div>
  );
}
