import React from 'react';
import { useParams } from 'react-router-dom';

function IdInfoPage() {
  const { idNumber } = useParams();
  console.log('ID Number from URL:', idNumber);

  // Simulated database with additional info
  const simulatedResults = [
    { id: 1, name: "John Doe", idNumber: "20040022", location: "Library", contact: "johndoe@gmail.com" },
    { id: 2, name: "Jane Smith", idNumber: "21102020", location: "Cafeteria", contact: "janesmith@domain.com" }
  ];

  const selectedId = simulatedResults.find(item => item.idNumber === idNumber);

  return (
    <div className="id-info-container">
      {selectedId ? (
        <div>
          <h2>ID Information</h2>
          <p>Name: {selectedId.name}</p>
          <p>ID Number: {selectedId.idNumber}</p>
          <p>Found at: {selectedId.location}</p>
          <p>Contact: {selectedId.contact}</p> {/* Sensitive information */}
        </div>
      ) : (
        <p>No information available for this ID.</p>
      )}
    </div>
  );
}

export default IdInfoPage;