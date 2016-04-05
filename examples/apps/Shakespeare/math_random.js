'use strict';

function MathRandom(){};

MathRandom.prototype.randomGenerator = function(len) {
    var arr =[];
    for(var i=0 ; i< len; i++) {
        arr.push(i);
    }
    return this.shuffle(arr);
};

MathRandom.prototype.shuffle = function(o){
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
};

module.exports  = MathRandom;