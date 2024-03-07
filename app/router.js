const {Router} = require("express");
const controller = require("./controller.js");

const router = Router();
// affichage de la Homepage
router.get("/",controller.displayHomepage);

router.get('/article/:id', controller.articles);

module.exports = router;