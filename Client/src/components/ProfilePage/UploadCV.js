import { useState } from "react";

export default function UploadCV() {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Upload CV</h3>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" />
        <button>Upload</button>
      </form>
    </div>
  );
}
