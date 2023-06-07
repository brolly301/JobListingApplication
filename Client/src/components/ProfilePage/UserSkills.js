import { useState } from "react";
import EditUserSkills from "./EditUserSkills";
import useUserContext from "../../hooks/useUserContext";
import "../../CSS/ProfilePage/UserSkills.css";

export default function UserSkills() {
  const { userSkills } = useUserContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="skills-container">
      <h2>Skills & Qualifications</h2>
      <div className="skills-input-container">
        <label>Work Experience:</label>
        <input
          type="text"
          placeholder={userSkills?.workExperience || "Work Experience"}
          readOnly
        />
        <br />
        <label>Education</label>
        <input
          type="text"
          placeholder={userSkills?.education || "Education"}
          readOnly
        />
        <br />
        <label>Skills</label>
        <input
          type="text"
          placeholder={userSkills?.skills || "Skills"}
          readOnly
        />
        <br />
        <label>Languages</label>
        <input
          type="text"
          placeholder={userSkills?.languages || "Languages"}
          readOnly
        />
        <br />
        <label>Driving License</label>
        <input
          type="text"
          placeholder={userSkills?.drivingLicense || "Driving License"}
          readOnly
        />
        <br />
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditUserSkills onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}
