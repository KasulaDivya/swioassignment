import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './appcontex.js';
import FormFloatingCustom from './form.js';
import DisplayData from './display.js';
import TextLinkExample from './navbar.js';
import Success from './success.js';
import Failurepage from './failurepage.js';
import Transaction from './transaction.js';
import "./App.css"

function App() {
  return (
    <>
    
    <AppProvider>
      <Router>
      <TextLinkExample></TextLinkExample>
        <Routes>
          <Route path="/" element={<FormFloatingCustom />} />
          <Route path="/display" element={<DisplayData />} />
          <Route path='/success' element={<Success></Success>}></Route>
          <Route path='/failure' element={<Failurepage></Failurepage>}></Route>
          <Route path='/transaction' element={<Transaction/>}></Route>
        </Routes>
      </Router>
    </AppProvider>
    </>
  );
}

export default App;
