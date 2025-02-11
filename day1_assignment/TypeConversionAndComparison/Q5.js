let i = 1;
let arr = [];
while (i <= 25) {
  arr[i] = i;
  i++;
  if (i == 5) {
    //return; // Exits the entire script immediately
    break;
  }
}
console.log(arr);
