require('dotenv').config();
const express = require('express');
//const cors = require('cors');
const dbConnect = require('./utils/db');
const adviceRoutes = require('./routes/index')

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

//app.use(cors());

app.use('/', adviceRoutes);


// Start server
app.listen(port, () => {
  dbConnect();
  console.log(`Server listening on port ${port}`);
});
``