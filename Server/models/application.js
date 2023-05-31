const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  adRef: {
    type: String,
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  salary: {
    type: Number,
  },
  location: {
    type: String,
  },
  category: {
    type: String,
  },
  contractTime: {
    type: String,
  },
  contractType: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
