// Exercise 7.1: Wrapper Component with children
// Demonstrates the children prop for composition

import "./Card.css";

function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <hr className="card-divider" />
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
