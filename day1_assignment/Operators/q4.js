/* What happens if you pass a regular/invalid JSON string to JSON.parse? What will
happen if such an invalid function runs in the program? Will other parts of the code
execute correctly after that? */

// JSON.parse
//Parameters: It accepts a string as a parameter
// Return: It returns an object - parsed from the string in the parameter.

//passing invalid JSON string to JSON.parse

const person = '{"name": "mehul", "age": 20, "address": "pune"}';
console.log(JSON.parse(person));
//o/p { name: 'mehul', age: 20, address: 'pune' }

const person1 = '{"name": "mehul", "age": 20, address: "pune"}';
console.log(JSON.parse(person1)); //this will throws an error

//does not execute  as the above line throws an error
console.log("hii ");
