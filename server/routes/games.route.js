const express = require('express');
const router = express.Router();

// Массив статистики
gameStatistics = [
    { gameName: 'Игра 1', bestScore: 100 },
    { gameName: 'Игра 2', bestScore: 150 },
  ];

  // Массив рейтинга
  playerRatings = [
    { playerName: 'Игрок 1', rating: 9.5 },
    { playerName: 'Игрок 2', rating: 8.8 },
  ];

// Маршрут для получения списка событий
router.get('/statistics', (req, res) => {
  res.json(gameStatistics); 
});

// Маршрут для получения списка событий
router.get('/ratings', (req, res) => {
    res.json(playerRatings); 
  });

module.exports = router;


