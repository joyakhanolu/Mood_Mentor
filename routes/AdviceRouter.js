const express = require('express');
const AdviceController = require('../controllers/AdviceController');

const router = express.Router();

router.post('/api/advice', (req, res) => {
    AdviceController.adviceUser
});

router.get('/api/advice', (req, res) => {
    AdviceController.getAllAdvice
});

module.exports = router;