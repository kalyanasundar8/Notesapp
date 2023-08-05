const express = require("express");
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controller/notesController.js");

const router = express.Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").put(updateNote).delete(deleteNote);

module.exports = router;
