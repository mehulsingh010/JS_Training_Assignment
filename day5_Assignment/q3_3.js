console.log("Regular function");
function exampleFunction(a, b, a) {
  console.log(a, b);
}

exampleFunction("first", "second", "third");
//third second
// third argument overrides the value of the first argument

console.log("Arrow function");
const arrowFunc = (a, b, a) => {
  console.log(a, b);
};

// SyntaxError: Duplicate parameter name not allowed in this context
