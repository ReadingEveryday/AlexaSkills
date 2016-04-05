'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var DataHelper = require('../data_helper');
chai.config.includeStack = true;

describe('DataHelper', function() {
    var subject = new DataHelper();
    var quote={
        "Quote": "Things base and vile, folding no quantity, Love can transpose to form and dignity: Love looks not with the eyes, but with the mind; And therefore is wing'd Cupid painted blind: Nor hath Love's mind of any judgement taste; Wings and no eyes figure unheedy haste: And therefore is Love said to be a child, Because in choice he is so oft beguiled.",
        "PlayName": "A Midsummer Night's Dream"
    };

    describe('#getShakespear Quote', function() {
        context('get a random quote', function() {
            it('returns matching airport code', function() {
                var value = subject.requestQuote([2,1], 0);
                console.log(value);
                return expect(value).not.to.be.a('null');
            });
        });
    });

    describe('#parseQuote', function() {
        context('get a random quote', function () {
            it('formats the quote as expected', function () {
                console.log(subject.formatQuote(quote));
            });
        });
    });
});