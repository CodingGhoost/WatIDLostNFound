import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Find.css';

function Find() {
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

    // Simulated search logic - replace with actual search logic
    const simulatedResults = [
      { id: 1, name: "John Doe", idNumber: "20040022", location: "Library" },
      { id: 2, name: "Jane Smith", idNumber: "21102020", location: "Cafeteria" }
    ];
    const filteredResults = simulatedResults.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleResultClick = (id) => {
    navigate(`/verify/${id}`);  // Redirect to verification page
  };

  return (
    <div className="find-container">
      <h2>Search ID</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter name..."
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="results-container">
        {results.length > 0 ? (
          results.map(item => (
            <div key={item.id} className="result-item" 
            onClick={() => handleResultClick(item.id)}>
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