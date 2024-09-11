import React, { useState } from 'react';
import { useDatabaseContext } from './context/DatabaseContext'; 
import './Report.css';

function Report() {
  const { addEntry } = useDatabaseContext();
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (idNumber.length !== 8 || isNaN(idNumber)) {
      setErrorMessage('ID number must be an 8-digit number.');
      return;
    }

    // Clear error message and simulate form submission
    setErrorMessage('');

    const newReport = {
      id: Math.random(),  // Generate a random ID
      name,
      idNumber,
      location,
      contact,
      notes,
    };

    addEntry(newReport);  // Add the new report to the shared database

    setSubmitted(true);

    // Reset form fields
    setName('');
    setIdNumber('');
    setLocation('');
    setContact('');
    setNotes('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);  // Trigger submit when Enter key is pressed
    }
  };

  return (
    <div className="report-container">
      <h2>Report a Lost ID</h2>
      {submitted ? (
        <p className="success-message">Thank you! Your report has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            placeholder="ID Number"
            className="form-input"
            required
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location Found/Last Seen"
            className="form-input"
            required
          />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact"
            className="form-input"
            required
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Additional Notes"
            className="form-textarea"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show validation error */}
          <button type="submit" className="submit-button" onKeyDown={handleKeyDown}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default Report;
