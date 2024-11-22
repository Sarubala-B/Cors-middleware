
const express = require('express');
const app = express();

// Middleware for logging request information
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
};
app.use(logger);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const port=3002;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));


//Authentication middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
 
  if (token === 'valid_token') {
      next(); // If authenticated, proceed to the next handler
  } else {
      res.status(403).json({message: "Forbidden: invalid token"});
  }
}

app.use('/private', authMiddleware); // Apply middleware to specific route
app.get('/private', (req, res) => {
  res.send('Welcome to the private route!');
});
