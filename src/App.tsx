import React from 'react';
import './App.css';
import Buttons from './components/buttons';
import count from './count'

function App() {

  return (
    <div className="App">
      <h1>{count.value}</h1>
      <Buttons/>
    </div>
  );
}

export default App;
