const pool = require('../config/db');

// Fetch all lost items
exports.getAllLostItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM lost_items');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching lost items:', error);
    res.status(500).json({ error: 'Failed to fetch lost items' });
  }
};

// Add a new lost item
exports.addLostItem = async (req, res) => {
  const { id_name, id_number, location, contact, notes } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO lost_items (id_name, id_number, location, contact, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id_name, id_number, location, contact, notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding lost item:', error);
    res.status(500).json({ error: 'Failed to add lost item' });
  }
};
