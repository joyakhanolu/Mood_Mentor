const express = require('express');
const AdviceController = require('../controllers/AdviceController');

const router = express.Router();

router.post('/api/advice', AdviceController.adviceUser);

router.get('/api/advice', AdviceController.getAllAdvice);

router.patch('/api/advice/:id', AdviceController.updateAdviceById);

module.exports = router;