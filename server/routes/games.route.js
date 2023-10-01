const express = require('express');
const router = express.Router();

// Массив игр
activeGames = [
    { id: 1, name: 'Турнир 1', date: '2023-10-15' },
    { id: 2, name: 'Игра 1', date: '2023-10-18' },
    // Добавьте другие активные турниры и игры по аналогии
  ];

// Маршрут для получения списка событий
router.get('/events', (req, res) => {
  res.json(activeGames); 
});

module.exports = router;


