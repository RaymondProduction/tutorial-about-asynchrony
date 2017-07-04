var async = require('async');

async.series([
    function(callback) {
        setTimeout(function() {
           console.log(1);
           callback(null);
        }, 3000);
    },
    function(callback) {
        setTimeout(function() {
           console.log(2);
           callback(null);
        }, 1000);
    }
]);
