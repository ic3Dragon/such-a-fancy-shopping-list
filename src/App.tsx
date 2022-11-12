import React from 'react';
import './App.css';
// import Counter from './components/Counter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <main className="App">
      <TodoForm/>
      <TodoList/>
      {/* <Counter/> */}
    </main>
  );
}

export default App;
