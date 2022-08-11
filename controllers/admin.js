const Todo = require("../models/todo");

const todoUtils = require("../utils/todos");
exports.addTodo = async (req, res) => {
  if (!req.body.todo) return res.redirect("/");

  try {
    await Todo.create({ Text: req.body.todo });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const thisTodo = await Todo.findById(req.params.id);
    thisTodo.IsDeleted = true;
    await thisTodo.save();
    res.redirect("/");

    // await Todo.findByIdAndDelete(req.params.id);
    // res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/?error");
  }
};

exports.compltedTodo = async (req, res) => {
  try {
    const thisTodo = await Todo.findById(req.params.id);
    thisTodo.Completed = true;
    await thisTodo.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
