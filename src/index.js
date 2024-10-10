// Импорт необходимых модулей
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');  // Подключение маршрутов, если они есть

// Инициализация приложения Express
const app = express();

// Middleware для обработки JSON запросов
app.use(bodyParser.json());

// Подключение маршрутов, если они есть
app.use('/api', routes);

// Добавление маршрута для корневого пути
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Указание порта для запуска сервера
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://admin:password123@localhost:27017/admin')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
