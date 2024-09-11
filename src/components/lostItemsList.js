import React from 'react';

function LostItemsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>ID Number: {item.idNumber}</p>
          <p>Found at: {item.location}</p>
        </li>
      ))}
    </ul>
  );
}

export default LostItemsList;
