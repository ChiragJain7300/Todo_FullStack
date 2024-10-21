import { create } from "zustand";

const url = "http://localhost:3020/api/todos";
const useTodoStore = create((set) => ({
  todos: [],
  getTodos: async () => {
    const res = await fetch("http://localhost:3020/api/todos/");
    const data = await res.json();

    set({ todos: data.todos });
  },
  createTodos: async (todo) => {
    const res = await fetch(`${url}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    const { success, newTodo } = data;
    console.log(newTodo);

    if (success) {
      set((state) => ({ todos: [...state.todos, newTodo] }));
    }
  },
  deleteTodos: async (id) => {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const deleted = await res.json();
    if (deleted.success) {
      set((state) => ({
        todos: state.todos.filter((todo) => todo._id !== id),
      }));
      return { success: true, message: "The Task was Removed" };
    } else return { success: false, message: "Server Error" };
  },
  toggleComplete: async (id) => {
    const res = await fetch(`${url}/${id}`, {
      method: "PATCH",
    });
    const data = await res.json();
    if (data.success) {
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      }));
    }
  },
}));

export default useTodoStore;
