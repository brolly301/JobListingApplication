import { useState } from "react";
import EditUserSkills from "./EditUserSkills";
import useUserContext from "../../hooks/useUserContext";

export default function UserSkills() {
  const { userSkills } = useUserContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div>
      <h3>Skills & Qualifications</h3>
      <div className="input-container">
        <input
          type="text"
          placeholder={userSkills?.workExperience || "Work Experience"}
          readOnly
        />
        <input
          type="text"
          placeholder={userSkills?.education || "Education"}
          readOnly
        />
        <input
          type="text"
          placeholder={userSkills?.skills || "Skills"}
          readOnly
        />
        <input
          type="text"
          placeholder={userSkills?.languages || "Languages"}
          readOnly
        />
        <input
          type="text"
          placeholder={userSkills?.drivingLicense || "Driving License"}
          readOnly
        />
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditUserSkills onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}
