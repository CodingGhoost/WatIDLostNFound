const express = require('express');
const dotenv = require('dotenv');
const lostItemsRoutes = require('./routes/lostItemsRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

// Routes
app.use('/api/lost-items', lostItemsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
