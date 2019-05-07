var express = require('express');
var router = express.Router();

var AppController = require('./controllers/AppController');

router.get('/', function(req, res) {
	console.log('about');
	res.setHeader('Content-Type', 'application/json');
	res.status(200);
	res.end(JSON.stringify([{ name: 'User 1' },{name:'User 2'}]));
});

router.get('/about', function(req, res) {
	console.log('about');
	res.setHeader('Content-Type', 'application/json');
	res.status(200);
	res.end(JSON.stringify([{ name: 'User 1' },{name:'User 2'}]));
});

router.post('/app/store', AppController.store);

module.exports = router;