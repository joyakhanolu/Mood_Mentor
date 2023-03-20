const express = require('express');
const cors = require('cors');
const Advice = require('./models/advice');
const db = require('./utils/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/advice', async (req, res) => {
  const category = req.query.category;
  try {
    const advice = await Advice.find({ category });
    res.json(advice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});