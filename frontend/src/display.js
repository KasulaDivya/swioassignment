import React, { useContext } from 'react';
import { AppContext } from './appcontex.js';
//import './DisplayData.css';

function DisplayData() {
  const { entries } = useContext(AppContext);

  return (
    <div>
      <h1>All Entries</h1>
      <div className="container">
        {entries.map((entry, index) => (
          <div className="entry" key={index}>
            <h2>{entry.name}</h2>
            <p>Amount: {entry.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayData;
