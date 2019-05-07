var createError = require('http-errors');
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var os          = require('os');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

var router = require('./src/router');

app.use('/', router);

app.use(function(req, res, next) {
	next(createError(404));
});

app.listen(process.env.PORT || 3000, function(){
	console.log('server running on '+os.hostname()+"--"+process.env.PORT);
});
