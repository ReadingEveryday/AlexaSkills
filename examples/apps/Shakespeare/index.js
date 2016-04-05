'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('shakespeare');
var DataHelper = require('./data_helper');
var Quotes = require('./quote.json');
var mathRandom = require('./math_random');
var index=0;
var randoms =[];

app.launch(function(req, res) {
    var prompt = "Here is a famous quote from Shakespeare. ";
    randoms = new mathRandom().randomGenerator(Quotes.length);
    res.session('randoms',randoms);
    res.session('index',0);


    var helper = new DataHelper();
    var sharespeareQuote =helper.formatQuote(helper.requestQuote(randoms, index)) ;
    prompt += sharespeareQuote;
    prompt += " Would you like another quote? ";
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});


app.intent('AMAZON.YesIntent', function (req, res){
    console.log(req);

    var index =  1;
    var randoms =  [];
    if (req.session && req.session.attributes) {
        index = parseInt(req.session.attributes.index);
        randoms = req.session.attributes.randoms;
    }
    if (randoms.length === 0) {
        randoms = new mathRandom().randomGenerator(Quotes.length);
    }
    res.session('randoms',randoms);
    res.session('index',index);

   // console.log(index);
    var prompt = " Here is another one for you from Shakespeare. ";

    var helper = new DataHelper();
    var sharespeareQuote =helper.formatQuote(helper.requestQuote(randoms, index)) ;
    //console.log(sharespeareQuote);
    prompt += sharespeareQuote;
    prompt += "  Would you like another quote? ";
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('AMAZON.NoIntent', function (req, res){
    var prompt = 'Thank you. Come back again for a new Shakespeare quote.';
    res.say(prompt).reprompt(prompt).shouldEndSession(true);
});

module.exports = app;