const Advice = require('../models/advice');

// Routes
const adviceUser = async (req, res) => {
    const { title, description, category } = req.body;
    try {
      const newAdvice = new Advice ({
        title,
        description,
        category,
      });
      await newAdvice.save();

      return res.status(201).json({ mssg: 'advice created sucessfully'}); 
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = adviceUser;