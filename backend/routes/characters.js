// backend/routes/characters.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json([{ message: 'GET route works!' }]);
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'POST route works!' });
});

module.exports = router;