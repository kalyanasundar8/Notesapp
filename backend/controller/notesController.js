const asyncHandler = require("express-async-handler");
const Notes = require("../models/notesModel.js");

//? @desc   Get all notes
//? route   GET/api/notes
//? access  public
const getNotes = asyncHandler(async (req, res) => {
  const user = await Notes.find();

  res.status(200).json(user);
});

//? @desc   Create a notes
//? route   POST/api/news
//? access  private
const createNote = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!req.body.title && req.body.description) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const note = await Notes.create({
    title,
    description,
  });

  res.status(200).json(note);
});

//? @desc   Update a notes
//? route   PUT/api/notes/id
//? access  private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  const updateNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateNote);
});

//? @desc   Delte notes
//? route   DELTE/api/notes/id
//? access  public
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  const deleteNote = await Notes.findByIdAndDelete(note);

  res.status(200).json({ message: "Successfuly deleted" });
});

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
