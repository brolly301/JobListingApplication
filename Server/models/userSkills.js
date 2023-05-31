const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSkillsSchema = new Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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
