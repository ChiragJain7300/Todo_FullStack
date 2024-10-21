import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
