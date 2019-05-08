exports.store = function(req, res) {
	var letter = isNumber(req.body.age);
	console.log(letter, req.body.age);

	if (isWordsAndSpaces(req.body.name) == null) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400);
		res.end(JSON.stringify({ response: 'El nombre debe contener valores alfabéticos.' }));
	}else if (!isEmail(req.body.email)) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400);
		res.end(JSON.stringify({ response: 'El formato de email es incorrecto.' }));
	}else if (!isNumber(req.body.age) || req.body.age>120) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400);
		res.end(JSON.stringify({ response: 'la edad no puede ser mayor a 120.' }));
	}else if (!isNumber(req.body.cellphone_number) || req.body.cellphone_number>3900000000 | req.body.cellphone_number<3000000000) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400);
		res.end(JSON.stringify({ response: 'Número celular inválido.' }));
	}else{
		res.setHeader('Content-Type', 'application/json');
		res.status(200);
		res.end(JSON.stringify({ response: 'Tu información fue enviada con éxito, estaremos en contacto contigo' }));
	}
};


function isWordsAndSpaces(s) { return s.match("^[a-zA-Z() ]+$"); } 
function isEmail(mail) { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); }
function isNumber(num) { return /^[0-9]*$/.test(num); } 
