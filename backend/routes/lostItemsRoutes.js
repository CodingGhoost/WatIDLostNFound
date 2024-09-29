const express = require('express');
const router = express.Router();
const { getAllLostItems, addLostItem } = require('../controllers/lostItemsController');

// GET all lost items
router.get('/', getAllLostItems);
router.post('/', addLostItem);

module.exports = router;