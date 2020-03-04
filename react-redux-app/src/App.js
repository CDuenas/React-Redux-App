import React from 'react';
import './App.css';
import Advice from './components/Advice';
import Wizard from '../src/Wizard.jpg';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the little shop of Wisdom!</h1>
      <img src={Wizard} alt="Wise Wizard" ></img>
      <Advice />
    </div>
  );
}

export default App;
