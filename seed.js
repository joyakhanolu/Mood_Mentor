const db = require('./utils/db');
const Advice = require('./models/advice');

const advice = [
  {
    title: 'Drink water',
    description: 'Stay hydrated by drinking at least 8 glasses of water a day.',
    category: 'health',
  },
  {
    title: 'Take breaks',
    description: 'Take short breaks every hour to avoid burnout and improve productivity.',
    category: 'career',
  },
  {
    title: 'Meditate',
    description: 'Take a few minutes to meditate each day to reduce stress and improve mental clarity.',
    category: 'lifestyle',
  },
];

db.once('open', async () => {
  try {
    await Advice.deleteMany();
    await Advice.insertMany(advice);
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});