import "../../CSS/HomePage/JobInput.css";

export default function JobInput({ ...rest }) {
  return (
    <div>
      <input className="job-input" {...rest} type="text" />
    </div>
  );
}
