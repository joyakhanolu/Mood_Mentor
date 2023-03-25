const mongoose = require('mongoose');
const Advice = require('./models/advice');

// Your advice data
const adviceData = [
  {
    category: 'Motivation',
    advice: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
  },
  {
    category: 'Motivation',
    advice: 'Your limitation—it’s only your imagination.',
  },
  {
    category: 'Motivation',
    advice: 'Push yourself, because no one else is going to do it for you.',
  },
  {
    category: 'Happiness',
    advice: 'Happiness is not something readymade. It comes from your own actions.',
  },
  {
    category: 'Happiness',
    advice: 'The happiest people don’t necessarily have the best of everything; they just make the best of everything they have.',
  },
  {
    category: 'Happiness',
    advice: 'If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.',
  },
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Connect to the database
    await mongoose.connect('mongodb://localhost:27017/advice_db');

    // Remove all existing advice data
    await Advice.deleteMany({});

    // Add the advice data to the database
    await Advice.insertMany(adviceData);

    // Disconnect from the database
    await mongoose.disconnect();

    console.log('Database seeded!');
  } catch (err) {
    console.error(err);
  }
}

module.exports = seedDatabase;