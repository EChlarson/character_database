// backend/routes/characters.js
const express = require('express');
const router = express.Router();
const Character = require('../models/character');

// GET all characters from the database
router.get('/', async (req, res) => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch characters', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.status(201).json({ message: 'Character created', newCharacter });
  } catch (error) {
    res.status(400).json({ message: 'Error adding character', error });
  }
});

module.exports = router;