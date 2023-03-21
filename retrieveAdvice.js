const mongoose = require('mongoose');
const Advice = require('./models/advice');

mongoose.connect('mongodb://localhost:5000/advice_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return Advice.find({});
  })
  .then((advices) => {
    console.log(advices);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
