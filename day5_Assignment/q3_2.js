//2

//regular function

function regular() {
  console.log(arguments);
}

regular(2, "m2", 4);

//arrow function
// `arguments` object not availabel for arrow function
const arrowFunc = (...args) => {
  console.log(args);
};

arrowFunc(1, "m2", 3);

// use rest (...args) to solve issues
