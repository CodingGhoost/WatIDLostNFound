import React from 'react';
import { useIDContext } from '../context/IDContext.js';
import '../styles/IdInfoPage.css';

function IdInfoPage() {
  const { selectedID } = useIDContext();

  return (
    <div className="id-info-container">
      {selectedID ? (
        <div>
          <h2>ID Information</h2>
          <p>Name: {selectedID.id_name}</p>
          <p>ID Number: {selectedID.id_number}</p>
          <p>Found at: {selectedID.location}</p>
          <p>Contact: {selectedID.contact}</p> 
          <p>Notes: {selectedID.notes}</p>
        </div>
      ) : (
        <p>No ID selected. Please go back to the Find page.</p>
      )}
    </div>
  );
}

export default IdInfoPage;