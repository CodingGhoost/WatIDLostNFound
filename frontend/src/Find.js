import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIDContext } from './context/IDContext.js';
import { useDatabaseContext } from './context/DatabaseContext.js';
import './Find.css';

function Find() {
  const { setSelectedID } = useIDContext();
  const { simulatedDatabase } = useDatabaseContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const maskIdNumber = (idNumber) => {
      return idNumber.slice(0, 2) + '****' + idNumber.slice(-2);
  };

  const handleSearch = () => {

    if (searchQuery.trim() === '') {
      setResults([]);  // If empty, set results to an empty array
      return;
    }

    const filteredResults = simulatedDatabase.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleResultClick = (selectedItem) => {
    setSelectedID(selectedItem);
    navigate('/verify');  
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();  // Trigger search when Enter key is pressed
    }
  };

  return (
    <div className="find-container">
      <h2>Search ID</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter name..."
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="results-container">
        {results.length > 0 ? (
          results.map(item => (
            <div key={item.id} className="result-item" 
            onClick={() => handleResultClick(item)}>
              <h3>{item.name}</h3>
              <p>ID Number: {maskIdNumber(item.idNumber)}</p>
              <p>Found at: {item.location}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Find;