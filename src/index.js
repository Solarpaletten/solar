const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Включение CORS для общения с фронтендом
app.use(cors());

// Заглушка для данных
const mockData = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
];

// Корневой маршрут
app.get('/', (req, res) => {
  res.send('Бэкенд успешно работает');
});

// Эндпоинт для получения данных
app.get('/api/items', (req, res) => {
  res.json(mockData);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
