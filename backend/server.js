const express = require('express');
const app = express();
const port = process.env.PORT || 5000;  // Use the Heroku-assigned port or default to 5000 for local development

// Middleware, routes, etc.
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
