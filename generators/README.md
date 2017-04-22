# Generator
Generator is special function which give result when call method **next**
Generator can stops  and return result, but after result again continue.

Generator use keyword **yield** for intermediate result. For define generator, use special construction **"function\*"**

## Example:
```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(one);               // < --{ value: 1, done: false }
console.log(generator.next());  // < --{ value: 2, done: false }
console.log(generator.next());  // < --{ value: 1, done: true }
console.log(generator.next());  // < --{ value: undefined, done: true }

```
