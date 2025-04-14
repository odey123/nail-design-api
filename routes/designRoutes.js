// routes/designRoutes.js
const express = require('express');
const router = express.Router();
const Design = require('../models/Design');
const auth = require('../middleware/auth');

// Save a new design
router.post('/Create-Design', auth, async (req, res) => {
  try {
    const design = await Design.create({ ...req.body, user: req.userId });
    res.status(201).json({ success: true, message: 'Design created successfully', design });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create design', error: err.message });
  }
});


router.get('/Retrieve-Design', auth, async (req, res) => {
  try {
    const designs = await Design.find({ user: req.userId });
    res.status(200).json({ success: true, message: 'Designs retrieved successfully', designs });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve designs', error: err.message });
  }
});

module.exports = router;
