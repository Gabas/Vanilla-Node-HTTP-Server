'use strict';

var http = require('http');
var fs = require('fs');
var Router = require('./lib/router');

var nameNumber = 1;

var router = Router();

router.get('/notes', function(req, res) {
	fs.readFile('./notes/'+ (nameNumber - 1).toString() + '.json', function(err, data) {
		if (err) { 
			console.log(err);
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('NO File, please do POST first');
			return res.end();
		}
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(JSON.parse(data)));
		return res.end();
	});
});

router.post('/notes', function(req, res) {
	
	req.on('data', function(data) {
		var parsed = JSON.parse(data);
		fs.writeFile('./notes/'+ nameNumber.toString() + '.json', JSON.stringify(parsed), function(err) {
			if (err) { 
				console.log(err); 
			}
			nameNumber++;
		});
	});
	
	req.on('end', function() {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Your data saved');
		return res.end();
	});
});

var server = http.createServer(router.route);

server.listen(3000, function() {
	console.log('server up');
});