const express = require('express');
const router = express.Router();

// Массив событий
const events = [
  { date: new Date(2023, 9, 5), time: '15:00', title: 'Тренировка' },
  { date: new Date(2023, 9, 10), time: '19:30', title: 'Игра с командой А' },
];

// Маршрут для получения списка событий
router.get('/events', (req, res) => {
  res.json(events);
});

module.exports = router;