// Exercise 7.2: Panel Component (Child)
// This component is controlled by props from parent (Accordion)

import "./Panel.css";

function Panel({ title, children, isActive, onShow }) {
  return (
    <div className={`panel ${isActive ? "panel-active" : ""}`}>
      <div className="panel-header">
        <h4>{title}</h4>
        <button onClick={onShow} className="panel-toggle">
          {isActive ? "Hide" : "Show"}
        </button>
      </div>
      {isActive && <div className="panel-content">{children}</div>}
    </div>
  );
}

export default Panel;
