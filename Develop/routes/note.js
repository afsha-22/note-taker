const note = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const uuid = require('../helper/uuid');

// GET Route for retrieving all the tips
note.get('/', (req, res) => {
  console.info(`${req.method} request received for note`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
note.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { noteTitle, noteText } = req.body;

  if (req.body) {
    const newNote = {
      noteTitle,
      noteText,
      // tip_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = note;
