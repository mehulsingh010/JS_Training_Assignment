/* 
Share a minimum four differentiation between regular function and arrow
functions with one examples
 */
const person = {
  name: "person1",
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

console.log(person.name);

person.greet();
// regular functions bind this to the object.

// using arrow function
console.log("usign arrow function");

const person1 = {
  name: "person1",
  greet: () => {
    console.log(`hello ${this.name}`);
  },
};

console.log(person1.name);

person1.greet();
// Arrow functions do not have their own this.
// this.name refers to the global object, not person1, so it prints undefined.
