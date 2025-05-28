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

//POST Add a new character to the database
router.post('/', async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.status(201).json({ message: 'Character created', newCharacter });
  } catch (error) {
    res.status(400).json({ message: 'Error adding character', error });
  }
});

// PUT - Update character by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedCharacter) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.status(200).json({ message: 'Character updated', updatedCharacter });
  } catch (error) {
    res.status(400).json({ message: 'Error updating character', error });
  }
});

// DELETE - Delete character by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);

    if (!deletedCharacter) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.status(200).json({ message: 'Character deleted', deletedCharacter });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting character', error });
  }
});

module.exports = router;