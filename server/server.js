const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


// const authRoutes = require('./routes/auth');
const eventsRoutes = require('./routes/events.rout');
const enviteRoutes = require('./routes/invite.route');
const gamesRoutes = require('./routes/games.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// app.use('/api/auth', authRoutes);
app.use('/api/calendar', eventsRoutes);
app.use('/api/invite', enviteRoutes);
app.use('/api/games', gamesRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
