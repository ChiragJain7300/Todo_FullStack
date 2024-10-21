import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  toggleTodo,
} from "../Controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodos).post(createTodo);
todoRouter.route("/:id").delete(deleteTodo).patch(toggleTodo);
