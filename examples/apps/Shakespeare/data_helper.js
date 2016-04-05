'use strict';
var Quotes = require('./quote.json');
var _ = require('lodash');
var mathRandom = require('./math_random');

function DataHelper() { }

DataHelper.prototype.requestQuote = function(randomArr, index) {
    var len = Quotes.length;
    var quoteIndex =  index>=len? 0 : index;

    return Quotes[randomArr[quoteIndex]];
};

DataHelper.prototype.formatQuote = function(response) {
    return _.template(' ${quote} The above is from ${playname} by Shakespeare. ')({
        quote: response.Quote,
        playname: response.PlayName
    });

};

module.exports = DataHelper;