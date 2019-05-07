var createError = require('http-errors');
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

const PORT = process.env.PORT || 3000

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

app.listen(PORT, function(){
	console.log('server running on localhost:'+PORT);
});
