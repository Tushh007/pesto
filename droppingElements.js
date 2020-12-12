/*
Drop the elements of an array (first argument), starting from the front, until the predicate(second argument) returns true. 
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

const droppingElements = (arr, cb) => {
  let i = 0;

  while (i < arr.length) {
    // Validating conition from the callback function
    condition = cb(arr[i]);

    // Remove the value at an index only if the callback function returns true
    if (!condition) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

console.log(
  droppingElements([1, 2, 3, 4], (n) => {
    return n >= 3;
  })
); // [3, 4]

console.log(
  droppingElements([0, 1, 0, 1], (n) => {
    return n === 1;
  })
); // [1, 1]

console.log(
  droppingElements([1, 2, 3, 4], (n) => {
    return n > 5;
  })
); // []

console.log(
  droppingElements([1, 2, 3, 7, 4], (n) => {
    return n > 3;
  })
); // [7, 4]

console.log(
  droppingElements([1, 2, 3, 9, 2], (n) => {
    return n > 2;
  })
); // [3, 9]
