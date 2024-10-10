const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction } = require('./controllers');

// Маршрут для получения всех транзакций
router.get('/transactions', getTransactions);

// Маршрут для добавления новой транзакции
router.post('/transactions', addTransaction);

// Тестовый маршрут для проверки работы API
router.get('/', (req, res) => {
  res.send('API is working!');
});

module.exports = router;
