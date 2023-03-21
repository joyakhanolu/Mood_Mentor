const { MongoClient } = require('mongodb');
const advice = require('./models/advice'); // replace with your own advice data

async function seedDatabase() {
  const uri = 'mongodb+srv://joyakhanolu17:kieshakay17@cluster0.miuwnkd.mongodb.net/?retryWrites=true&w=majority'; // replace with your own URI
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
