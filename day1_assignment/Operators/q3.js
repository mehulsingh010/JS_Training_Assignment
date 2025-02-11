/* Do you think JSON.stringify would work for arrays as well? What about nested objects?
What happens if we pass numbers, strings, undefined, null to JSON.stringify? */

let person = {
  name: "mehul",
  age: 20,
  address: "pune",
};

console.log(JSON.stringify(person));

//JSON.stringify accepts an object as a parameter

//return a string - basically the object in its stringified format
// o/p : {"name":"mehul","age":20,"address":"pune"}

let arrays = [1, 2, 3, 4];

console.log(JSON.stringify([1, 2, 3, 4]));
//does not work for array

//passing nested object

let person1 = {
  name: "mehul",
  age: 20,
  address: {
    location: "pune",
    pincode: 422009,
  },
};
console.log(JSON.stringify(person1));

//worked for nested object

//passing number
console.log("passing number :", JSON.stringify(20));
//o/p 20

//passing strings
console.log("passing string :", JSON.stringify("hello world"));
//o/p "hello world"

//passing undefined
console.log("passing undefined  :", JSON.stringify(undefined));
//o/p undeined

//passsing null
console.log("passing null", JSON.stringify(null));
//o/p null
