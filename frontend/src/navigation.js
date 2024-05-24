import React from 'react';

import { AppProvider } from './appcontexp';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from './form';
import Success from './success';
import Failurepage from './failurepage';




function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          {/* <Route path="/display" element={<DisplayData/>} /> */}
          <Route path='/success' element={<Success/>}></Route>
          <Route path='/failure' element={<Failurepage/>}></Route>
        </Routes>
        </BrowserRouter>
    </AppProvider>
  );
}

export default App;
