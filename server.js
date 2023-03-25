const express = require('express');
const mongoose = require('mongoose');
const Advice = require('./models/advice');

// Create the Express app
const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error(err));

// Define a route to get advice by category
app.get('/advice/:category', async (req, res) => {
  try {
    // Get the category from the request parameters
    const category = req.params.category;

    // Find a random advice for the given category
    const advice = await Advice.aggregate([
      { $match: { category } },
      { $sample: { size: 1 } },
    ]);

    // Send the advice as the response
    res.json(advice[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(5000, () => console.log('Server started on port 5000'));
