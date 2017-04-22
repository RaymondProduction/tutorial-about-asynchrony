# Async and await

**Async** is keyword witch make function as if it were synchronous, but without blocking the main thread.
An **async** function can contain an *await*. **Await** is keyword witch make to stop **async function**
while  **promis** has a waiting state.

## Example
```js
function resolveAfter2Seconds(x) {
  return new Promise(
    function(resolve) {
      setTimeout(function() {
        resolve(x);
      }, 2000);
    }
  );
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(function(v) {
  console.log(v); // prints 60 after 2 seconds.
});

async function add2(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add2(10).then(function(v) {
  console.log(v); // prints 60 after 4 seconds.
});

```
