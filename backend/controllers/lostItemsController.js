const pool = require('../config/db');

exports.getAllLostItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM lost_items');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addLostItem = async (req, res) => {
  const { id_name, id_number, location, contact, notes } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO lost_items (id_name, id_number, location, contact, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id_name, id_number, location, contact, notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error saving lost item:', err);  // Log the error
    res.status(500).send('Server Error');
  }
};
