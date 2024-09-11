import React, { createContext, useState, useContext } from 'react';

// Create the IDContext
const IDContext = createContext();

// Custom hook to access the context easily
export const useIDContext = () => useContext(IDContext);

// Provider component to wrap your app
export const IDProvider = ({ children }) => {
  const [selectedID, setSelectedID] = useState(null);  // Store selected ID info

  return (
    <IDContext.Provider value={{ selectedID, setSelectedID }}>
      {children}
    </IDContext.Provider>
  );
};
