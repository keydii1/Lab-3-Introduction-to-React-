// Exercise 5: Managing Component Memory with State
// Demonstrates useState hook for managing local state

import { useState } from "react";
import "./Counter.css";

function Counter() {
  // useState hook creates a state variable 'count' initialized to 0
  // setCount is the function to update the state
  const [count, setCount] = useState(0);

  // Handler function to increment count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Handler function to decrement count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Handler to reset count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={handleDecrement} className="btn btn-minus">
          -
        </button>
        <button onClick={handleReset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={handleIncrement} className="btn btn-plus">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

/*
 * Conceptual Question (Exercise 5.2):
 *
 * Would you use props or state to manage the online status in UserProfile?
 *
 * Answer: You should use STATE to manage the online status.
 *
 * Reasoning:
 * - State is used for data that changes over time within a component
 * - When the user clicks a button to toggle, we need to update and re-render
 * - Props are for passing data DOWN from parent to child (read-only)
 * - Since the toggle button is inside UserProfile, the component needs to
 *   "remember" and update its own status, which is what state is for
 *
 * However, if the online status needs to be shared with other components,
 * you might need to "lift state up" to a parent component.
 */
