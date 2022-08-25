
import './App.css';
import React from 'react'
import Qwerty from './Qwerty.js';
import King from './King';
import Hooks from './Hooks';
import Other from './Other';

function App() {
  return (
    <div className="App">
   <Qwerty/>
   <King color="blue"/>
   <Hooks/>
   <Other />
   
    </div>
  );
}

export default App;
