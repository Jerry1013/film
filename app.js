var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
// 静态文件目录
var staticDir = path.join(__dirname, 'public');

// configuration in all env
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.use("/public", express.static(staticDir));
app.use(bodyParser());
app.use(function (req, res, next) {
    next();
});

routes(app);

app.listen(3000 , function(){
	console.log("sever started at port : 3000");
});