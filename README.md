# Promis, Async and Await
My little tutorial about **Promis**, **async** and **await**

## Promis
Promise - special object which contain three state.
* pending - waiting
* fulfilled - completed successfully
* rejected - completed unsuccessfully

Promise could be use two callback functions. Namely, function onFulfilled and onRejected.

* onFulfilled - call when Promise have state fulfilled
* onRejected - call when Promise have state rejected

So, Now, we will look at an example.
```js
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

```
It here we created object Primise. And use method **then** of promise, this method calling onFulfilled and onRejected
