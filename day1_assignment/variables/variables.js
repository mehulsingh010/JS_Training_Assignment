// // 1. Declare a variable - let a;.
// //  On another line assign any value you like to a.
// // Log the value of a before and after assignment.
// // Try doing the same with const.
// let a;
// console.log(a);
// // undefined
// a = 20;
// console.log(a);
// // 20

// // const b ;
// // error  need to intitiaize the variale
// // console.log(b);
// // undefined
// b = 20;
// console.log(b);

// /*
// 2. Use the typeof operator to find the types of different variables.
// Specially note what t typeof operator returns for arrays, null values and NaN.
// How can you find if a variable  an array or NaN besides typeof?
//  */

// let letstr = "mehul";
// console.log(letstr, typeof letstr);

// let num = 10;
// console.log(num, typeof num);
// let arr = [1, 2, 3, 4, 5];

// console.log(typeof arr);
// //array is object

// console.log(typeof NaN);
// //Nan is number

// console.log(typeof null);
// // object

// console.log(Array.isArray(arr));

// console.log(Number.isNaN(NaN));

// /*
// 3. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?

// */

// let letarr = [1, 2, 3, 4, 5];

// console.log("letarr value at index 5", letarr[5]);
// letarr[1] = 10;
// letarr.push(10);
// console.log("letarr value at index 5", letarr[5]);
// console.log("push method of array", letarr);

// letarr.pop();
// console.log("pop method of array", letarr);

// const constarr = [1, 2, 3, 4, 5];

// console.log("Const arr value at index 5", constarr[5]);
// constarr[1] = 10;
// constarr.push(10);
// console.log("push method used on array", constarr);

// console.log("push method used on array", constarr);
// constarr.pop();
// console.log("pop method used on array", constarr);

// let letobj = {
//   name: "mehul",
//   age: 20,
//   address: {
//     city: "nashik",
//   },
// };

// letobj = 10;
// console.log(letobj);
// console.log("object  before modify", letobj);
// letobj.last_name = "Charak";

// console.log("Let Object after modify", letobj);

// const constObj = {
//   name: "rohit",
//   age: 20,
// };

// console.log("Const Object before modify", constObj);
// constObj.last_name = "kuber";

// console.log("Const Object after ", constObj);

// constObj.age = 22;

// console.log("Const Object age change", constObj);

// constObj = "raj";

const constObj = {
  name: "rohit",
  age: 20,
};
console.log(typeof constObj);

console.log(constObj);

constObj.age = "raj";

console.log(constObj);
