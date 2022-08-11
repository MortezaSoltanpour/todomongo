const Todo = require("../models/todo");

//const todoUtils = require("../utils/todos");

exports.getIndex = async (req, res) => {
  try {
    const allTodos = await Todo.find({ IsDeleted: false });
    const completedItems = await Todo.countDocuments({ Completed: true });
    res.render("index", {
      pageTitle: "کارهای روزمره",
      todos: allTodos,
      compltedUtils: completedItems,
      remainingTodos: allTodos.length - completedItems,
    });
  } catch (error) {}
};
