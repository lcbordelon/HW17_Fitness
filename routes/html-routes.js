// Dependencies
const path = require("path");
const router = require("express").Router();

// Routes

// Each of the below routes just handles the HTML page that the user gets sent to.

// exercise route loads exercise.html
router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

// stats route loads stats.html
router.get("/stats", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/stats.html"))
);

module.exports = router;
