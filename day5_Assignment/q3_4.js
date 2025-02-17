// calling a regular function before it is declared.
regularFunction();

function regularFunction() {
  console.log("This is a regular function.");
}

// ouput
// This is a regular function.

//calling a arrow function before it is declared.
arrowFunction();
const arrowFunction = () => {
  console.log("This is an arrow function.");
};

//output
// ReferenceError: Cannot access 'arrowFunction' before initialization
