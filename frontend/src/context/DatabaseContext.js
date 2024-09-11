import React, { createContext, useState, useContext } from 'react';

// Create the DatabaseContext
const DatabaseContext = createContext();

// Custom hook to use the DatabaseContext
export const useDatabaseContext = () => useContext(DatabaseContext);

const initialData = [
  {
    id: 1,
    name: 'Wayne Doe',
    idNumber: '20040022',
    location: 'Library',
    contact: 'john@example.com',
    notes: 'Found near the library entrance'
  },
  {
    id: 2,
    name: 'Yang Smith',
    idNumber: '21102020',
    location: 'Cafeteria',
    contact: 'jane@example.com',
    notes: 'Found on the cafeteria table'
  }
];

// Provider component
export const DatabaseProvider = ({ children }) => {
  const [simulatedDatabase, setSimulatedDatabase] = useState(initialData);

  // Function to add new entries to the simulated database
  const addEntry = (newEntry) => {
    setSimulatedDatabase((prevDatabase) => [...prevDatabase, newEntry]);
  };

  return (
    <DatabaseContext.Provider value={{ simulatedDatabase, addEntry }}>
      {children}
    </DatabaseContext.Provider>
  );
};
