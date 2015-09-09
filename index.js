'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	
	req.on('data', function(data) {
		if(req.url == '/greet'){
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify({"hello": JSON.parse(data).name }));
			return res.end();
		}
	});

	if(req.url == '/time'){
		var time = new Date().toString();
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(time);
		return res.end();
	}

	if(req.url.slice(0, 7) == '/greet/' && req.url[7]) {
		var userName = req.url.slice(7);
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello, ' + userName);
		return res.end();
	}

	req.on('end', function() {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('Page not found');
		return res.end();
	});
});

server.listen(3000, function() {
	console.log('server up');
});