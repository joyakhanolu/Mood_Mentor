const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:5000/advice'; // replace with your own URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Add your code to insert data into your database here

  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

run().catch(console.error);


// Define the advice data
const advice = [
  {
    category: "health",
    advice: [
      {
        title: "Eat healthy foods",
        description: "Eating a healthy diet is important for maintaining good health.",
      },
      {
        title: "Get enough sleep",
        description: "Getting enough sleep is important for your overall health and well-being.",
      },
      {
        title: "Stay hydrated",
        description: "Drinking plenty of water is important for maintaining good health.",
      },
    ],
  },
  {
    category: "relationship",
    advice: [
      {
        title: "Communicate openly",
        description: "Open communication is key to a healthy relationship.",
      },
      {
        title: "Practice empathy",
        description: "Empathy is an important trait for building strong relationships.",
      },
      {
        title: "Make time for each other",
        description: "Spending quality time together is important for maintaining a strong relationship.",
      },
    ],
  },
  // add more categories and advice as needed
];
