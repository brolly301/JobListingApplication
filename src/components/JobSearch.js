import JobInput from "./JobInput";

import "../CSS/JobSearch.css";

export default function JobSearch() {
  return (
    <div>
      <div>Job Search</div>
      <JobInput placeholder="Job Title" />
      <JobInput placeholder="Category" />
      <JobInput placeholder="Location" />
    </div>
  );
}
