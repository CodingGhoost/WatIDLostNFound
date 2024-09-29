import React, { useState } from 'react';
import '../styles/Report.css';

function Report() {
  const [id_name, setName] = useState('');
  const [id_number, setIdNumber] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (id_number.length !== 8 || isNaN(id_number)) {
      setErrorMessage('ID number must be an 8-digit number.');
      return;
    }

    // Clear error message and simulate form submission
    const reportData = {
      id_name: id_name,
      id_number: id_number,
      location: location,
      contact: contact,
      notes: notes
    };

    try {
      // Send the data to the backend API
      const response = await fetch('/api/lost-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit report');
      }

      setSubmitted(true);

      setName('');
      setIdNumber('');
      setLocation('');
      setContact('');
      setNotes('');

    } catch (error) {
      console.error('Error submitting report:', error);
      setErrorMessage('Failed to submit report. Please try again later.');
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
            value={id_name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="text"
            value={id_number}
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
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Report;
