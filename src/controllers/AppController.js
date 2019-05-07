exports.store = function(req, res) {
	
	if (req.body.name==null) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400);
		res.end(JSON.stringify({ response: 'Hay campos mal diligenciados.' }));
	}else{
		res.setHeader('Content-Type', 'application/json');
		res.status(200);
		res.end(JSON.stringify({ response: 'Tu información fue enviada con éxito, estaremos en contacto contigo' }));
	}
};
