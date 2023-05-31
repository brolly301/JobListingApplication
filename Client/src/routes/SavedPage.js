import ApplicationList from "../components/SavedPage/ApplicationList";
import SavedJobList from "../components/SavedPage/SavedJobList";

export default function SavedPage() {
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Saved Jobs</h1>
      <SavedJobList />
      <br />
      <br />
      <h1 style={{ textDecoration: "underline" }}>Job Applications</h1>
      <ApplicationList />
    </div>
  );
}
