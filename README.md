# 🚀 Lab 3: Introduction to React

A comprehensive React learning project implementing exercises from **Lab 3: Introduction to React** by MSc. Tran Vinh Khiem.

## 📋 Overview

This project demonstrates fundamental React concepts through practical exercises:

- **Component Basics** - Functional components and JSX
- **Props** - Data passing, destructuring, default parameters
- **State** - useState hook for managing component memory
- **Event Handling** - Controlled inputs, form handling
- **Composition** - children prop, wrapper components
- **Lifting State Up** - Sharing state between components
- **Capstone Project** - Full Todo App implementation

## 🛠️ Technologies

- React 19
- Vite 7
- Vanilla CSS

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── FirstComponent.jsx    # Exercise 1: Basic component
│   ├── UserProfile.jsx       # Exercise 2 & 4: Props & themes
│   ├── ProfileCard.jsx       # Exercise 3: Props destructuring
│   ├── Counter.jsx           # Exercise 5: useState hook
│   ├── Login.jsx             # Exercise 6: Controlled form
│   ├── Card.jsx              # Exercise 7.1: children prop
│   ├── Accordion.jsx         # Exercise 7.2: Lifting state up
│   ├── Panel.jsx             # Exercise 7.2: Controlled child
│   ├── TodoApp.jsx           # Capstone: Main container
│   ├── TodoForm.jsx          # Capstone: Add todo form
│   ├── TodoList.jsx          # Capstone: List rendering
│   └── TodoItem.jsx          # Capstone: Single todo item
├── App.jsx                   # Main application
└── main.jsx                  # Entry point
```

## ✅ Exercises Completed

| Part | Exercise | Concept                    |
| ---- | -------- | -------------------------- |
| I    | 1        | First Component            |
| II   | 2, 4     | Props & Default Parameters |
| II   | 3        | Props Destructuring        |
| III  | 5        | useState Hook              |
| III  | 6        | Controlled Inputs          |
| IV   | 7.1      | children Prop              |
| IV   | 7.2      | Lifting State Up           |
| VI   | Capstone | Full Todo App              |

## 🔧 React DevTools (Exercise 8)

1. Install [React Developer Tools](https://react.dev/learn/react-developer-tools)
2. Open DevTools → Components tab
3. Inspect component state and props
4. Enable "Highlight updates when components render"

## 📦 Deployment

Deployed on Vercel. To deploy your own:

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically with Vite preset

## 👨‍🎓 Author

Lab assignment by **MSc. Tran Vinh Khiem**

## 📄 License

MIT
