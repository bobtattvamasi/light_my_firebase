import React from 'react';
import logo from './logo.svg';

// Import this if your are using react-bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css';

function App() {
  return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
}

export default App;
