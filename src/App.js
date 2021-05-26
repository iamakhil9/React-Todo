import './App.css';
import Inputbox from './Inputbox';
import React, { useState } from 'react';

function App() {
  const [taskitems, setTaskitems] = useState([]);
  const [item, setItem] = useState("");
  return (
    <div className="App">
      <h1>TODO APP with React</h1>
      <Inputbox item={item} setItem={setItem} setTaskitems={setTaskitems} taskitems={taskitems} />
    </div>
  );
}

export default App;
