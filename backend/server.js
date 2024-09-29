const express = require('express');
const pool = require('./db');  // Assuming your db config is in db.js

const app = express();
const port = process.env.PORT || 5000;  // Use the Heroku-assigned port or default to 5000 for local development

// Middleware to parse incoming JSON
app.use(express.json());

// GET API: Fetch all lost items
app.get('/api/lost-items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM lost_items');  // Query all rows from the lost_items table
    res.json(result.rows);  // Return the rows as a JSON response
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST API: Add a new lost item
app.post('/api/lost-items', async (req, res) => {
  const { id_name, id_number, location, contact, notes } = req.body;

  // Check if required fields are provided
  if (!id_name || !id_number || contact) {
    return res.status(400).json({ error: "Name and ID number are required" });
  }

  try {
    const result = await pool.query(
      'INSERT INTO lost_items (id_name, id_number, location, contact, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id_name, id_number, location, contact, notes]
    );

    res.status(201).json(result.rows[0]);  // Return the newly inserted item as a response
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
