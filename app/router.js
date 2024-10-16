
// On importe le controller
const controller = require('./controller');

const express = require('express');
// initialise le routeur
const router = express.Router();


// créer la premiere route de lurl
router.get('/', controller.homePage); 
router.get('/article/:id', controller.articlePage);

router.get('/category/:name', controller.categoryPage);
 module.exports = router;