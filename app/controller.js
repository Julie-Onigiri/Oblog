// récupération des articles
const articles = require("../data/articles.json");

const controller = {
    displayHomepage(req, res) {
        //Récupération des articles dans la liste des articles
   // const foundArticle = res.locals.articles;

        res.render("homepage");
    },
    
    // const foundArticle = res.locals.articles,

    // console.log(foundArticle)



}



module.exports = controller;