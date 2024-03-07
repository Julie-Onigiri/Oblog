// fichier de lancement de notre serveur


const express = require("express");
const app = express();
/// Configuration du moteur de rendu
app.set('views', './app/views');
app.set('view engine', 'ejs'); 

app.use(express.json());

/// Gestion des fichiers statiques
app.use(express.static('static'));

/// Gestion des routes
const router = require("./app/router");
app.use(router);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`site accessible sur : http://localhost:${PORT}`);
});
