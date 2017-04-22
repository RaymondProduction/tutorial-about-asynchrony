// Create object promise
var promise = new Promise(function(resolve, reject) {
  // if time < 1 second then it is error
  var time = Math.random() * 2000;

  setTimeout(function() {
    resolve("One second passed");
  }, 1000);

  setTimeout(function() {
    reject(time);
  }, time);

});

// Method then(onFulfilled, onRejected) calling onFulfilled and onRejected
promise.then(
  function(result) {
    console.log('Fulfilled:' + result);
  },
  function(error) {
    console.log('Rejected:' + error);
  }
);
