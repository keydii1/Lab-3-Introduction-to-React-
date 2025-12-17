// Exercise 7.2: Accordion Component (Parent) - Lifting State Up
// The state is lifted up to this parent component to control which panel is active

import { useState } from "react";
import Panel from "./Panel";
import "./Accordion.css";

function Accordion() {
  // State lifted up to parent - only one panel can be active at a time
  // activeIndex tracks which panel is open (0-based, or -1 for none)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      <h2>Accordion (Lifting State Up Demo)</h2>

      <Panel
        title="What is React?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
      >
        <p>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          "components".
        </p>
      </Panel>

      <Panel
        title="What is JSX?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
      >
        <p>
          JSX is a syntax extension for JavaScript that lets you write HTML-like
          markup inside a JavaScript file. It makes it easier to write and
          understand the structure of React components.
        </p>
      </Panel>

      <Panel
        title="What are Hooks?"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? -1 : 2)}
      >
        <p>
          Hooks are functions that let you "hook into" React state and lifecycle
          features from function components. The most common hooks are useState
          and useEffect.
        </p>
      </Panel>
    </div>
  );
}

export default Accordion;
