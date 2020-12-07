/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to 
num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence 
is the sum of two previous numbers. The first six numbers of the Fibonacci numbers are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3 and 5.
*/

const sumFibs = (number) => {

  if (num <= 0) return 0;
  if (num === 1) return 2;

  const fibonacciNums = [1, 1];

  let nextFibonaciNums =
    fibonacciNums[fibonacciNums.length - 1] +
    fibonacciNums[fibonacciNums.length - 2];

  while (nextFibonaciNums <= num) {
    fibonacciNums.push(nextFibonaciNums);
    let nextFibonaciNums =
      fibonacciNums[fibonacciNums.length - 1] +
      fibonacciNums[fibonacciNums.length - 2];
  }

  const addFibonacciNums = fibonacciNums.filter((fibonacciNums) => fibonacciNums % 2 !== 0)
  
  return addFibonacciNums.reduce((sum, fibonacciNum) => sum + fibonacciNum)
};

console.log(sumFibs(1000)); //1785
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); //60696
console.log(sumFibs(4000000)); //4613732
