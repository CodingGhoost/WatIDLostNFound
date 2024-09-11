import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIDContext } from './context/IDContext.js'

function VerifyPage() {
  const { selectedID } = useIDContext();
  const [inputId, setInputId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to verify the full ID
  const handleVerify = () => {
    if (selectedID && selectedID.idNumber === inputId) {
      navigate(`/id-info`);  // Navigate to the ID Info page
    } else {
      setError('Invalid ID number. Please try again.');
    }
  };

  if (!selectedID) {
    return <p>No ID selected. Please go back to the Find page.</p>;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleVerify();  // Trigger verify when Enter key is pressed
    }
  };

  return (
    <div className="verify-container">
      <h2>Verify Your ID</h2>
      <input
        type="text"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter the full 8-digit ID number"
        className="id-input"
      />
      <button onClick={handleVerify} className="verify-button">Verify</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default VerifyPage;
