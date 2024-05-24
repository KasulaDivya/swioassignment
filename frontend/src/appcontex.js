import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <AppContext.Provider value={{ entries, setEntries }}>
      {children}
    </AppContext.Provider>
  );
};
