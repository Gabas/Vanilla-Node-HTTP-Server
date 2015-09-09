'use strict';

var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

require('../index.js');


describe('index.js', function(){
  describe('GET /greet', function(){
	var response;
	var error;
	
	before(function(done){
	  chai.request('localhost:3000')
		.get('/greet/roman')
		.end(function(err, res){
			console.log('response:', res.text); // this is the response
			error = err;
			response = res;
			done();
		});
	});

	it('shoud not return an error', function(){
	  expect(error).to.eql(null);
	});

	it('should have somehting', function(){
	  expect(response.text).to.eql('Hello, roman');
	});
  });
});
