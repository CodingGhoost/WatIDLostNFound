import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIDContext } from '../context/IDContext.js';
import '../styles/Find.css';

function Find() {
  const { setSelectedID } = useIDContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [lostItems, setLostItems] = useState([]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://wat-id-lost-and-found.herokuapp.com/api/lost-items')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch lost items');
        }
        return response.json();
      })
      .then((data) => {
        setLostItems(data);
      })
      .catch((err) => {
        console.error('Error fetching lost items:', err);
        setError(err.message);
      });
  }, []);

  const maskIdNumber = (idNumber) => {
      return idNumber.slice(0, 2) + '****' + idNumber.slice(-2);
  };

  const handleSearch = () => {

    if (searchQuery.trim() === '') {
      setResults([]);  // If empty, set results to an empty array
      return;
    }

    const filteredResults = lostItems.filter(item =>
      item.id_name.toLowerCase().includes(searchQuery.toLowerCase())
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
      {error && <p className="error">{error}</p>}  {/* Display any errors */}
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
            <div key={item.id} className="result-item" onClick={() => handleResultClick(item)}>
              <h3>{item.id_name}</h3>
              <p>ID Number: {maskIdNumber(item.id_number)}</p>
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