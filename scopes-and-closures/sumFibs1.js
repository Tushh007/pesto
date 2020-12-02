/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to 
num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence 
is the sum of two previous numbers. The first six numbers of the Fibonacci numbers are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3 and 5.
*/

const sumFibs = (number) => {
  // Initializing startingtwo numbers of the Fibonacci sequence
  let num1 = 1;
  let num2 = 1;

  // Initializing sum with first two numbers of the Fibonacci sequence
  let sum = 2;

  for (let i = 3; i <= number; i++) {

    // Calculating fibnocacci number at ith number
    const currentNum = num1 + num2;

    // Storing previous two numbers from the ith number
    num1 = num2;
    num2 = currentNum;

    // Calculating the sum after checking whteher the number is odd or not and whether it is less then the given number
    if (currentNum % 2 === 1 && currentNum < number) {
      sum += currentNum;
    }
  }

  return sum;
};

console.log(sumFibs(1000)); //1785
console.log(sumFibs(4)); // 5
console.log(sumFibs(75024)); //60696
console.log(sumFibs(4000000)); //4613732
