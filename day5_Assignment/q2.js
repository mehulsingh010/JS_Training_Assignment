/* Implement a Fibonacci sequence generator using a generator function in
JavaScript.
 */

// simple generator function

function* fibonacci() {
  let num1 = 0,
    num2 = 1,
    iterator = 0;

  while (true) {
    yield num1;
    [num1, num2] = [num2, num1 + num2];
  }
}

const fibGen = fibonacci();

const num = 6;
for (let i = 0; i < num; i++) {
  console.log(fibGen.next().value);
}
