var createError = require('http-errors');
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var os = require('os')
var networkInterfaces = os.networkInterfaces( );
const PORT = process.env.PORT || 3000
app.set('port', (process.env.PORT || 5000));

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

app.listen(app.get('port'), function(){
	for (var devName in networkInterfaces) {
		var iface = networkInterfaces[devName];
		for (var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
				console.log(alias.address);
		}
	}
	console.log('server running on '+os.hostname()+"--"+PORT);
});
