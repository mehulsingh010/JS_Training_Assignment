/* Write a function that can stop execution of a function for the number of milliseconds
sent as an argument
Example:
const func = async () => {
console.log(“Printing before”)
//Call your function here eg. sleep(3000)
console.log(“Printing after”)
} */

function timer(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const func = async () => {
  console.log("Printing before");
  await timer(2000);
  console.log("Printing after");
};

console.log(func());
