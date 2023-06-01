const Application = require("../models/application");
const SavedJob = require("../models/savedJob");

exports.apply = async (req, res) => {
  if (req.user) {
    const application = await new Application({
      username: req.user._id,
      ...req.body,
    });
    application.save();
    res.send(application);
  } else {
    res.status(404).json();
  }
};

exports.save = async (req, res) => {
  if (req.user) {
    const savedJob = await new SavedJob({
      username: req.user._id,
      ...req.body,
    });
    savedJob.save();
    res.send(savedJob);
  } else {
    res.status(404).json();
  }
};

exports.getSavedJobs = async (req, res) => {
  if (req.user) {
    const savedJob = await SavedJob.find({ username: req.user._id });
    res.send(savedJob);
  } else {
    res.status(404).json();
  }
};

exports.getApplications = async (req, res) => {
  if (req.user) {
    const applications = await Application.find({ username: req.user._id });
    res.send(applications);
  } else {
    res.status(404).json();
  }
};

exports.deleteSavedJob = async (req, res) => {
  await SavedJob.findByIdAndDelete(req.body.id);
  res.status(200).json();
};
