// Part VI: Capstone Project - TodoForm Component
// Controlled form for adding new todos

import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAddTodo }) {
  // Controlled input state
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Don't add empty todos
    if (inputValue.trim() === "") return;

    // Call parent's addTodo function
    onAddTodo(inputValue.trim());

    // Clear the input
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
