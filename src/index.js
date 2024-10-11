const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Подключение всех маршрутов

const app = express();
const PORT = process.env.PORT || 3000;

// Включение CORS для общения с фронтендом
app.use(cors());

// Middleware для обработки JSON запросов
app.use(bodyParser.json());

// Корневой маршрут
app.get('/', (req, res) => {
  res.send('Бэкенд успешно работает');
});

// Подключение маршрутов из файла routes.js
app.use('/api', routes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
