'use strict';
var chai = require('chai');
var expect = chai.expect;
var MathRandom = require('../math_random');
chai.config.includeStack = true;

describe('Math Random', function() {
    var subject = new MathRandom();

    describe('#getRandom arra', function() {
        context('get a random quote', function() {
            it('returns matching airport code', function() {
                var value = subject.randomGenerator(10);
                console.log(value);
                return expect(value).not.to.be.a('null');
            });
        });
    });

});