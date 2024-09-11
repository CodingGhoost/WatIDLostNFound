import React, { useState } from 'react';

function ReportLostItemForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, idNumber, location });
  };

  return (
    <form>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Your Name"
      />
      <input 
        type="text" 
        value={idNumber} 
        onChange={(e) => setIdNumber(e.target.value)} 
        placeholder="ID Number"
      />
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Location Found"
      />
      <button type="button" onClick={handleSubmit}>Report Lost ID</button>
    </form>
  );
}

export default ReportLostItemForm;
