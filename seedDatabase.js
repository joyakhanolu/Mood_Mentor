const { MongoClient } = require('mongodb');
const advice = require('./advice'); // replace with your own advice data

async function seedDatabase() {
  const uri = 'mongodb://localhost:5000/advice'; // replace with your own URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db();
    const result = await db.collection('advice').insertMany(advice);
    console.log(`${result.insertedCount} advice inserted`);

  } catch(err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

module.exports = seedDatabase;
