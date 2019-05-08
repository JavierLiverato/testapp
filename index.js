var createError = require('http-errors');
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var os          = require('os');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

var router = require('./src/router');

app.use('/', router);

app.use(function(req, res, next) {
	next(createError(404));
});
//process.env.PORT 
const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
