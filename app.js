const express = require('express');
const fs = require('fs');

// Init app
const app = express();

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));

// Static
app.use(express.static('public'))

// Routes
// Home
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Heroes
app.get('/heroes', (req, res) => {
  res.send(heroes);
});

app.get('/heroes/:id', (req, res) => {
  console.log(req.params.id)
  let heroe = heroes.find(heroe => heroe.id == req.params.id);
  console.log(heroe)
  if(heroe === undefined) {
    res.send('No existe héroe con ese id')
  } else {
    res.send('​"Hola, mi nombre es​ ' + heroe.nombre + ' y soy ' + heroe.profesion);
  }


  res.send(heroes);
});

app.listen(4000, () => console.log('Servidor corriendo en puerto 4000'));