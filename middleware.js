const express = require('express');
const app = express();

// Application-level
app.use((req, res, next) => {
  console.log('Global middleware for every request');
  next();
});

// Middleware for the router
const router = express.Router();
const routerMiddleware = (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    next(); 
};

// Apply the middleware to all routes handled by the router
router.use(routerMiddleware);
// Define routes
router.get('/profile', (req, res) => {
    res.send('User profile');
});

router.get('/settings', (req, res) => {
    res.send('User settings');
});

//third-party module
const morgan = require('morgan');
app.use(morgan('tiny'));  // Log all HTTP requests in the 'tiny' format


//Built-in-middleware
app.use(express.json());  // Parse JSON bodies

//error-handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


const port=3002;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});