const express = require('express');

// Init app
const app = express();

// Static
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(4000, () => console.log('Servidor corriendo en puerto 4000'));