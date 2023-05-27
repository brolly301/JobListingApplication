const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  path: {},
});

module.exports = mongoose.model("File", FileSchema);
