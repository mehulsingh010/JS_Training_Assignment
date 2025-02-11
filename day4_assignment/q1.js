/* Create a memoised function that returns the cached value when the same arguments
are passed. */

const cache = {};

function values(memovalue) {
  if (memovalue in cache) {
    console.log("Returning value from cache");
    return cache[memovalue];
  } else {
    console.log("Performing New Calculation");

    cache[memovalue] = memovalue * memovalue;
    return cache[memovalue];
  }
}

function memoSqaure(memoValue) {
  console.log("memoVar value", memoValue);
  return values(memoValue);
}

console.log(memoSqaure(100));
console.log(memoSqaure(100));
console.log(memoSqaure(1));

//* output  */
