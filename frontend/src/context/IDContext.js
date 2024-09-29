import React, { createContext, useContext, useState } from 'react';

// Create the context
const IDContext = createContext();

// Custom hook to use the context
export const useIDContext = () => useContext(IDContext);

// Context provider to wrap around the app
export const IDProvider = ({ children }) => {
  const [selectedID, setSelectedID] = useState(null);

  return (
    <IDContext.Provider value={{ selectedID, setSelectedID }}>
      {children}
    </IDContext.Provider>
  );
};
