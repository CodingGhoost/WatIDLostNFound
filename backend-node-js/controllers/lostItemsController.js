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