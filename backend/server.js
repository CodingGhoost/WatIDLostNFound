const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const lostItemsRoutes = require('./routes/lostItemsRoutes');

dotenv.config(); // Loads environment variables from .env file
const app = express();
const port = process.env.PORT || 5001;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Wat-ID Lost and Found API!');
});

// API routes
app.use('/api/lost-items', lostItemsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
