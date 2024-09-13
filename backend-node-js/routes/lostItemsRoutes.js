const express = require('express');
const router = express.Router();
const { getAllLostItems } = require('../controllers/lostItemsController');

// GET all lost items
router.get('/', getAllLostItems);

module.exports = router;