const articles = require('../data/articles.json');


const controller = {
//methode pour la page d'accueil
homePage: (req, res) => {
    res.render('index', { articles });
  },

  // methode pour la page d un article via l'id
  articlePage: (req,res)=>{
    const articleId = req.params.id;
    console.log(articleId);
    const findArticle = articles.find(article => article.id === parseInt(articleId));
    console.log(findArticle);
    res.render('article', { article: findArticle });
},
// methode pour filtrer par categorie
   categoryPage: (req, res) => {
    // on récupère la catégorie
    const category = req.params.name;
    console.log(category);
    // on cherche les articles correspondants
    const findArticles = articles.filter(article => article.category === category);
    // on va rendre une vue EJS avec les articles de la catégorie choisie
    res.render('index', { articles: findArticles, category })
  }
  
}
module.exports = controller;






