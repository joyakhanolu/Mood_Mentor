const express = require('express');
const AdviceController = require('../controllers/AdviceController');

const router = express.Router();

router.post('/api/advice', function(req, res) {
    AdviceController.adviceUser
});

module.exports = router;