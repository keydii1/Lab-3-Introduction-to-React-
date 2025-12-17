// Lab 3: Introduction to React - Main App Component
// This file integrates all the exercise components

import "./App.css";

// Part I: Component Basics
import FirstComponent from "./components/FirstComponent";
import UserProfile from "./components/UserProfile";

// Part II: Props & Styling
import ProfileCard from "./components/ProfileCard";

// Part III: State and Interactivity
import Counter from "./components/Counter";
import Login from "./components/Login";

// Part IV: Advanced Composition Patterns
import Card from "./components/Card";
import Accordion from "./components/Accordion";

// Part VI: Capstone Project
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Lab 3: React Exercises</h1>
        <p>MSc. Tran Vinh Khiem</p>
      </header>

      <main className="app-main">
        {/* Part I: Exercise 1 - First Component */}
        <section className="exercise-section">
          <h2 className="section-title">Part I: Component Basics</h2>
          <Card title="Exercise 1: First Component">
            <FirstComponent />
          </Card>
        </section>

        {/* Part II: Exercises 2-4 - Props and Styling */}
        <section className="exercise-section">
          <h2 className="section-title">Part II: Props & Styling</h2>

          {/* Exercise 2 & 4: UserProfile with default props and theme */}
          <Card title="Exercise 2 & 4: UserProfile with Props & Theme">
            <div className="profile-demo">
              <UserProfile
                name="John Doe"
                bio="A passionate React developer"
                theme="light"
              />
              <UserProfile
                name="Jane Smith"
                bio="Full-stack engineer and UI enthusiast"
                theme="dark"
              />
              <UserProfile /> {/* Using default props */}
            </div>
          </Card>

          {/* Exercise 3: ProfileCard with destructured props */}
          <Card title="Exercise 3: ProfileCard with Destructuring">
            <ProfileCard
              name="Alex Johnson"
              age={28}
              location="San Francisco, CA"
            />
          </Card>
        </section>

        {/* Part III: Exercises 5-6 - State and Interactivity */}
        <section className="exercise-section">
          <h2 className="section-title">Part III: State and Interactivity</h2>

          {/* Exercise 5: Counter with useState */}
          <Card title="Exercise 5: Counter with useState">
            <Counter />
          </Card>

          {/* Exercise 6: Login form with controlled inputs */}
          <Card title="Exercise 6: Controlled Form Inputs">
            <Login />
          </Card>
        </section>

        {/* Part IV: Exercise 7 - Advanced Composition */}
        <section className="exercise-section">
          <h2 className="section-title">
            Part IV: Advanced Composition Patterns
          </h2>

          {/* Exercise 7.2: Accordion with Lifting State Up */}
          <Card title="Exercise 7.2: Accordion (Lifting State Up)">
            <Accordion />
          </Card>
        </section>

        {/* Part VI: Capstone Project - Todo App */}
        <section className="exercise-section">
          <h2 className="section-title">Part VI: Capstone Project</h2>
          <TodoApp />
        </section>
      </main>

      <footer className="app-footer">
        <p>
          💡 <strong>Exercise 8:</strong> Use React Developer Tools to inspect
          components, modify state, and observe re-renders!
        </p>
      </footer>
    </div>
  );
}

export default App;
