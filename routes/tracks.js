const express = require("express");
const router = express.Router();

// GET http://localhost:2609/tracks
router.get("/", (req, res) => {
  const dataXample = ["track1", "track2", "track3"];
  res.send({ dataXample });
});

module.exports = router;
