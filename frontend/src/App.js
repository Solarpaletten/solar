import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });
      if (response.ok) {
        alert('Клиент успешно добавлен!');
      } else {
        alert('Ошибка при добавлении клиента');
      }
    } catch (error) {
      console.error('Ошибка при добавлении клиента:', error);
      alert('Ошибка подключения к серверу');
    }
  };

  return (
    <div>
      <h1>Клиенты</h1>
      <h2>Добавить клиента</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default App;
