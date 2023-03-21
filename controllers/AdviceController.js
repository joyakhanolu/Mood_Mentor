const Advice = require('../models/advice');

// Routes
const adviceUser = async (req, res) => {
    
    try {
      const { title, description, category } = req.body;
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

  const getAllAdvice = (req, res) => {
    Advice.find()
      .then((advice) => {
        return res.status(200).json(advice);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  };

  const updateAdviceById = (req, res) => {
    const { id } = req.params;
    const { title, description, category } = req.body;
    
    Advice.findById()
      .then((advice) => {
        return res.status(200).json(advice);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  };

  module.exports = {
    adviceUser, 
    getAllAdvice,
  };