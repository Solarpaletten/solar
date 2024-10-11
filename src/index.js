require('dotenv').config(); // Подключаем dotenv для загрузки переменных из .env

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');

// Подключение к базе данных PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect()
  .then(() => console.log('Подключение к базе данных выполнено успешно'))
  .catch(err => console.error('Ошибка подключения к базе данных:', err.stack));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Маршрут для добавления клиента
app.post('/api/clients', (req, res) => {
  const { name, email, phone } = req.body;

  const query = 'INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3)';
  client.query(query, [name, email, phone], (err, result) => {
    if (err) {
      console.error('Ошибка добавления клиента:', err);
      res.status(500).json({ error: 'Ошибка сервера' });
    } else {
      res.status(201).json({ message: 'Клиент успешно добавлен' });
    }
  });
});

// Маршрут для получения всех клиентов
app.get('/api/clients', (req, res) => {
  client.query('SELECT * FROM clients', (err, result) => {
      if (err) {
          console.error('Ошибка выполнения запроса:', err);
          res.status(500).json({ error: 'Ошибка выполнения запроса' });
      } else {
          res.json(result.rows); // Возвращаем всех клиентов в формате JSON
      }
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
