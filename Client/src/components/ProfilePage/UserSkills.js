import { useState } from "react";
import EditUserSkills from "./EditUserSkills";

export default function UserSkills() {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = (e) => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div>
      <h3>Skills & Qualifications</h3>
      <div className="input-container">
        <input type="text" placeholder="Work Experience" readOnly />
        <input type="text" placeholder="Education" readOnly />
        <input type="text" placeholder="Skills" readOnly />
        <input type="text" placeholder="Languages" readOnly />
        <input type="text" placeholder="Driving License" readOnly />
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditUserSkills onEdit={handleEdit} />;
  }

  return <div>{content}</div>;
}