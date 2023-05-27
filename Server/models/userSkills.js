const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSkillsSchema = new Schema({
  workExperience: {
    type: String,
  },
  education: {
    type: String,
  },
  skills: {
    type: String,
  },
  languages: {
    type: String,
  },
  drivingLicense: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
  },
});

module.exports = mongoose.model("UserSkills", UserSkillsSchema);
