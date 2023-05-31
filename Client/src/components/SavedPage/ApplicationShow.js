export default function ApplicationShow({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <h3>{job.category}</h3>
      <h3>{job.salary}</h3>
      <h3>{job.contractTime}</h3>
      <h3>{job.contractType}</h3>
      <h3>{job.location}</h3>
      <a href={job.link}>Adzuna Link</a>
    </div>
  );
}
