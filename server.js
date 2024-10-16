//  Config des const
const express = require('express');

const router = require('./app/router');

const PORT = 3000;

const app = express();
// config du chemin des views et du moteur
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/static'));

app.use(router);

app.listen(PORT, () => {
console.log('http://localhost:3000');
});


    
  