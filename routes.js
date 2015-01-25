var indexCtrl = require('./controllers/indexCtrl');
var categoryCtrl = require('./controllers/categoryCtrl');
var filmCtrl = require('./controllers/filmCtrl');

module.exports = function (app) {
	 // home page
    app.get('/', indexCtrl.index);

    app.get('/film/categories' , categoryCtrl.getCategories);

    app.get('/film/films/:cateId' , filmCtrl.getFilms);

    app.get('/film/detail/:filmId' , filmCtrl.getFilm);

    app.get('/film/order/:filmId/:amount/:houseId' , filmCtrl.orderFilm);

    app.get('/film/getOrder/:orderId' , filmCtrl.getOrder);

    app.post('/film/searchFilm' , filmCtrl.searchFilm);

    app.get('/houses' , filmCtrl.getHouses);
}