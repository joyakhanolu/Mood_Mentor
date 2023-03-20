const mongoose = require('mongoose');

const dbConnect = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to mongodb successfully');
  } catch(error) {
    console.log('Error connecting to mongodb', error.message);
  }
}

module.exports = dbConnect;