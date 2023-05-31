const express = require("express");
const {
  apply,
  save,
  getSavedJobs,
  getApplications,
} = require("../controllers/jobs");
const router = express.Router();

router.post("/apply", apply);
router.post("/save", save);
router.get("/savedJobs", getSavedJobs);
router.get("/applications", getApplications);

module.exports = router;
