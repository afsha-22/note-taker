const express = require('express')
const path = require('path')
const dataBase = require('./db/db.json')


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))



app.get('/api/notes', (req, res) => res.json(dataBase));

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
})

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});