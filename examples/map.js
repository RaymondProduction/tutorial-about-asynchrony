var async = require('async');

async.map([1,2,3],
         function(value,call){
            call(null,value*3);
         },
         function(err, results) {
              console.log(results)
         }
);

//  3 6 9
