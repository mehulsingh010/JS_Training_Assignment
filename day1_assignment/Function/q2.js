// Take a function that accepts a function as a parameter (also known as callback function).

function test(callback) {
  callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

/* Explore the following cases - what is printed in the console, and what gets returned:
○ test(callbackFunc)
○ test(callbackFunc())
○ test(() => callbackFunc())
○ What happens when you return callback() from the test function?
○ What happens when you return callback from the test function? */

// 1
console.log(test(callbackFunc));
// Calling the callback function
// udefined
// console.log(callbackFunc());
// // Calling the callback function
// // 5

// test(() => callbackFunc());
// Calling the callback function
