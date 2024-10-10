// Импорт необходимых модулей
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes'); // Подключение маршрутов

// Инициализация приложения Express
const app = express();

// Middleware для парсинга JSON запросов
app.use(bodyParser.json());

// Подключение маршрутов
app.use('/api', routes);

// Указание порта для запуска сервера
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB с пользователем 'admin' и базой 'admin'
mongoose.connect('mongodb://admin:12345@localhost:27017/admin')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

// Запуск сервера на указанном порту
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
