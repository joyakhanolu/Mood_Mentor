const mongoose = require('mongoose');
const seedDatabase = require('./seed');
const Advice = require('./models/advice');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/advice_db')
  .then(async () => {
    // Seed the database
    await seedDatabase();

    // Find all the advice in the database
    const advice = await Advice.find({});

    console.log(advice);

    // Disconnect from the database
    await mongoose.disconnect();
  })
  .catch((err) => console.error(err));
