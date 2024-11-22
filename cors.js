const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Allow CORS for a specific domain
app.use(cors({
    origin: 'http://example.com' 
}));
app.get('/data', (req, res) => {
    res.json({ message: 'This is a CORS-enabled response!' });
});

// Enable CORS for all origins
app.use(cors());
// Handle preflight requests
app.options('/data', cors());
app.post('/data', (req, res) => {
    res.json({ message: 'Data received!' });
});


// Custom CORS options
const corsOptions = {
  origin: 'http://example.com', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Custom headers
  exposedHeaders: ['X-Custom-Header'], // Headers exposed to the browser
};

app.use(cors(corsOptions));

app.get('/data', (req, res) => {
  res.json({ message: 'This is a CORS-enabled response!' });
});

app.post('/data', (req, res) => {
  res.json({ message: 'Data received!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
