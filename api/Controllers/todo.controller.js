import { Todo } from "../Models/todo.model.js";
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(202).json({ success: true, todos });
  } catch (error) {
    return res.status(401).json({ success: false, error });
  }
};
const createTodo = async (req, res) => {
  const todo = req.body;
  if (!todo.content)
    return res
      .status(401)
      .json({ success: false, message: "All Fields are Mandatory" });
  try {
    const newTodo = await Todo.create(todo);
    return res.status(201).json({ success: true, newTodo });
  } catch (error) {
    return res.status(403).json({ success: false, error });
  }
};
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Todo.findByIdAndDelete(id);
    return res
      .status(203)
      .json({ success: true, message: "The todo was deleted" });
  } catch (error) {
    return res.status(403).json({ success: false, error });
  }
};
const toggleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo)
      return res
        .status(401)
        .json({ success: false, message: "The id is wrong" });
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      completed: !todo.completed,
    });
    return res
      .status(201)
      .json({ status: true, message: "The Task was updated" });
  } catch (error) {
    return res.staus(401).json({ success: false, error });
  }
};

export default { getAllTodos, createTodo, deleteTodo, toggleTodo };
