'use strict';

var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var fs = require('fs');
chai.use(chaiHttp);

require(__dirname + '/../index.js');

describe('index.js', function(){
  describe('POST /notes', function(){
	var response;
	var error;
	var exist;
	
	beforeEach(function(done){
		chai.request('localhost:3000')
			.post('/notes')
			.send({name: "'Roman'"})
			.end(function(e, res){
				console.log('response:');
				error = e;
				response = res;
				done();
				exist = fs.existsSync('./notes/1.json');
		});
	});

	it('shoud not return an error', function(){
		expect(error).to.eql(null);
	});

	it('should return true if file created', function(){
		expect(true).to.eql(exist);
	});
  });
});
