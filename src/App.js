import React, { useState } from 'react';
import './App.css';
import Drop from './Drop';


const items = [
  {
    id: 1,
    value: 'HTML',
  },
  {
    id: 2,
    value: 'CSS',
  },
  {
    id: 3,
    value: 'JAVA SCRIPT',
  },
  {
    id: 4,
    value: 'MONGODB',
  },
  {
    id: 5,
    value: 'NODE.JS',
  },
  {
    id: 6,
    value: 'EXPRESS',
  },
  {
    id: 7,
    value: 'BOOSTRAP',
  },
];

function App() {
  const [selected,setSelected]=useState("")
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        CUSTUM DROPDOWN
      </h1>
      {/* <Dropdown title="Select movie" items={items} multiSelect /> */}
      <Drop selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
