import React from 'react';
import './App.css';

import TodosContainer from './components/todos_container';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <TodosContainer />
    </div>
  );
}

export default App;
