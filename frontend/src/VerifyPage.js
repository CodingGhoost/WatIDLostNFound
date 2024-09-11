import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function VerifyPage() {
  const { id } = useParams();  // Get the ID from the URL
  const [inputId, setInputId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulated database for verification
  const simulatedResults = [
    { id: 1, name: "John Doe", idNumber: "20040022", location: "Library", contact: "yang@gmail.com" },
    { id: 2, name: "Jane Smith", idNumber: "21102020", location: "Cafeteria", contact: "wayne@domain.com" }
  ];

  // Function to verify the full ID
  const handleVerify = () => {
    const selectedId = simulatedResults.find(item => item.id === parseInt(id));
    if (selectedId && selectedId.idNumber === inputId) {
      navigate(`/id-info/${selectedId.idNumber}`);  // Redirect to the detailed ID info page
    } else {
      setError('Invalid ID number. Please try again.');
    }
  };

  return (
    <div className="verify-container">
      <h2>Verify Your ID</h2>
      <input
        type="text"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="Enter the full 8-digit ID number"
        className="id-input"
      />
      <button onClick={handleVerify} className="verify-button">Verify</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default VerifyPage;
