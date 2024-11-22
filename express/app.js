// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3005;

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use('/users', userRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
