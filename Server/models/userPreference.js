const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserPreferenceSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  salary: {
    type: Number,
  },
  location: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobType: {
    type: String,
  },
  remote: {
    type: String,
    enum: ["remote", "hybrid", "office"],
    default: "office",
  },
});

module.exports = mongoose.model("UserPreferences", UserPreferenceSchema);
