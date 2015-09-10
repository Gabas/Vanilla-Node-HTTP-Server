var routes = {
	'GET': {},
	'POST': {}
};

var Router = function() {};

module.exports = exports = function() {
	return new Router();
};

Router.prototype.get = function(route, callback) {
	routes.GET[route] = callback;
};

Router.prototype.post = function(route, callback) {
	routes.POST[route] = callback;
};

Router.prototype.route = function(req, res) {
	if (typeof routes[req.method][req.url] === 'function')
    routes[req.method][req.url](req, res);
};