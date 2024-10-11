const express = require('express');
const router = express.Router();
const client = require('./db');

// Маршрут для добавления нового клиента
router.post('/clients', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO clients (name, email) VALUES ($1, $2) RETURNING *';

  client.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Ошибка при добавлении клиента:', err);
      res.status(500).json({ error: 'Ошибка при добавлении клиента' });
    } else {
      res.json({ message: 'Клиент успешно добавлен', client: result.rows[0] });
    }
  });
});

module.exports = router;
