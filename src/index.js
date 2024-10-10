// Импорт необходимых модулей
const express = require('express');
const mongoose = require('mongoose');  // Если используется MongoDB, можно удалить если PostgreSQL
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Инициализация приложения Express
const app = express();

// Middleware для обработки JSON и CORS
app.use(bodyParser.json());
app.use(cors());

// Пример маршрута
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Подключение к MongoDB (если используется)
mongoose.connect('mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Запуск сервера на порту 3001 (для фронтенда будет прокси)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
