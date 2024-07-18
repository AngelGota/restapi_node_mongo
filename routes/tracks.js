const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const router = express.Router();

// GET /tracks
router.get("/", getItems);

// GET /tracks/:id
router.get("/:id", getItem);

// POST /tracks
router.post("/new", createItem);

module.exports = router;
