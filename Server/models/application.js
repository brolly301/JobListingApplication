const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = {
  adRef: {
    type: String,
  },
};

module.exports = mongoose.model("Application", ApplicationSchema);
