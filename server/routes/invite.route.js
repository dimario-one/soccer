const express = require("express");
const router = express.Router();

// Массив участников
participants = [
  { id: 1, name: "Иван", email: "ivan@example.com" },
  { id: 2, name: "Мария", email: "maria@example.com" },
];

// Массив приглашений
invitations = [
  { id: 1, event: "Мероприятие 1", sender: "Пользователь 1" },
  { id: 2, event: "Мероприятие 2", sender: "Пользователь 2" },
];

// Маршрут для получения списка участников
router.get("/participants", (req, res) => {
  res.json(participants);
});

// Маршрут для получения списка участников
router.get("/invitations", (req, res) => {
  res.json(invitations);
});

module.exports = router;
