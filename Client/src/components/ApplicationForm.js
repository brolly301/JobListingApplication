import "../CSS/ApplicationForm.css";

export default function ApplicationForm() {
  return (
    <div className="application-container">
      <h1 className="application-title">Application Form</h1>
      <button className="application-fill-button">Fill Profile Details</button>
      <form>
        <div className="application-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Highest Level of Education" />
          <input type="text" placeholder="Current Salary" />
          <textarea type="text" placeholder="Work Experience" />
          <input type="text" placeholder="Skills" />
          <textarea type="text" placeholder="Personal Statement" />
          <button>Submit Application</button>
        </div>
      </form>
    </div>
  );
}
