const express = require("express");
const { getResults } = require("../controllers/jobs");
const router = express.Router();

router.get("/:id", getResults);

module.exports = router;
