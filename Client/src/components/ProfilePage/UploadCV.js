import axios from "axios";
import { useState } from "react";
import "../../CSS/ProfilePage/CV.css";

export default function UploadCV() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files);
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myfile", file);

    axios
      .post("http://localhost:8080/profile/fileUpload", { data: formData })
      .then((res) => {
        alert("Success dawg");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cv-container">
      <h2>Upload CV</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
        <input onChange={handleChange} type="file" name="myfile" id="myfile" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
