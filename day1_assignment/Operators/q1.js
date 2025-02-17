// What is the difference between ++i and i++?
let num = 0;

for (let i = 1; i < 3; ++i) {
  num = i;
  console.log("++i", num);
}

let num1 = 0;
for (let i = 1; i < 3; i++) {
  num1 = i;
  console.log("i++", num1);
}
