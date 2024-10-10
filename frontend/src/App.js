import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Запрос к API бэкенда
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Фронтенд с React</h1>
      {data ? <p>{data.message}</p> : <p>Загрузка данных...</p>}
    </div>
  );
}

export default App;
// Task 3
