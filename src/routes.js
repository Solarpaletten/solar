const express = require('express');
const router = express.Router();

// Эндпоинт для данных
router.get('/data', (req, res) => {
  res.json({ message: 'Успешное подключение к /api/data' });
});

module.exports = router;
