'use strict';

var expect = require('chai').expect;

describe('greet_test', function() {
	it('should greet with given name', function() {
		expect('Roman').to.eql('Roman');
	});
});