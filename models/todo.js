const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  Text: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    max: 255,
  },
  Completed: {
    type: Boolean,
    required: false,
    default: false,
  },
  IsDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
