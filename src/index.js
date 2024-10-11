require('dotenv').config(); // Load dotenv to read environment variables from .env

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');

// Connect to PostgreSQL database
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect()
  .then(() => console.log('Successfully connected to the PostgreSQL database'))
  .catch(err => console.error('Database connection error:', err.stack));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Route to add a client
app.post('/api/clients', (req, res) => {
  const { name, email, phone } = req.body;

  const query = 'INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3)';
  client.query(query, [name, email, phone], (err, result) => {
    if (err) {
      console.error('Error adding client:', err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.status(201).json({ message: 'Client added successfully' });
    }
  });
});

// Route to get all clients
app.get('/api/clients', (req, res) => {
  client.query('SELECT * FROM clients', (err, result) => {
    if (err) {
      console.error('Query execution error:', err);
      res.status(500).json({ error: 'Query execution error' });
    } else {
      res.json(result.rows); // Return all clients in JSON format
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
