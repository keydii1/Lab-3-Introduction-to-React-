// Part VI: Capstone Project - TodoApp Component (Main Parent)
// This is the main container that lifts state up and manages all todo operations

import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

function TodoApp() {
  // Lifted state - todos array managed in parent component
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React basics", completed: true },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Master useState hook", completed: false },
  ]);

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID using timestamp
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Calculate stats
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-app">
      <h2>📝 Todo List</h2>
      <p className="todo-stats">
        {completedCount} of {totalCount} tasks completed
      </p>

      <TodoForm onAddTodo={addTodo} />

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default TodoApp;
