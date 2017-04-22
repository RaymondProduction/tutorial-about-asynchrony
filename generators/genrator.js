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

