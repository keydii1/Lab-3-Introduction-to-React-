// Part VI: Capstone Project - TodoList Component
// Renders a list of TodoItems using .map()

import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>No todos yet! Add one above.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
