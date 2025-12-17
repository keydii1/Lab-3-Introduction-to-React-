// Exercise 6: Handling User Interaction - Controlled Components
// Demonstrates controlled inputs with useState and form handling

import { useState } from "react";
import "./Login.css";

function Login() {
  // Exercise 6.2: Single state object for multiple form fields
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Single handleChange function for both fields
  // Uses the input's name attribute to update the correct field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, // Spread existing form data
      [name]: value, // Use computed property name to update the correct field
    });
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default page refresh
    console.log("Form submitted:", formData);
    alert(
      `Login attempt:\nUsername: ${formData.username}\nPassword: ${formData.password}`
    );
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            autoComplete="username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      {/* Display current form values for debugging (Exercise 6.1) */}
      <div className="form-preview">
        <p>
          <strong>Current username:</strong> {formData.username || "(empty)"}
        </p>
        <p>
          <strong>Password length:</strong> {formData.password.length}{" "}
          characters
        </p>
      </div>
    </div>
  );
}

export default Login;
