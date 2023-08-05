const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("note", notesSchema);
