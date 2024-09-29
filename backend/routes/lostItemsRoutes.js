const express = require('express');
const router = express.Router();
const { getAllLostItems, addLostItem } = require('../controllers/lostItemsController');

// GET request to fetch all lost items
router.get('/', getAllLostItems);

// POST request to add a new lost item
router.post('/', addLostItem);

module.exports = router;