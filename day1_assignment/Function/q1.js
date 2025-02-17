/* 
What happens when you add a for loop/while loop/switch case block inside a function
and use return instead of break? Do statements after the loop run? What is the return
value? Can we pass a return value from within a loop? Can you return from inside an if
block? What impact does that have? */
let arrSize = 25;
let arr = [];
function func() {
  for (let i = 1; i < arrSize; i++) {
    arr[i] = i;
    return;
  }
  console.log("after using break or return ");
}
func();
console.log(arr);
console.log(func);

// when using return the function exits immediately and nothing after it runs

// output when usign break
// after using break or return
// [ <1 empty item>, 1 ]

// oupt when using return
// [ <1 empty item>, 1 ]

// Can we pass a return value from within a loop
// Can You return Inside an if Block?
// yes

function returnValue(num) {
  for (let num of arra) {
    if (num % 2 == 0) {
      return num;
    }
  }
  return -1;
}

let arra = [1, 2, 3, 4];
console.log(returnValue(arra));
