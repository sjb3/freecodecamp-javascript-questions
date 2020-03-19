"use strict";

function sumFibs(num) {
  let a = 1,
    b = 1,
    sum = a;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    // let temp = b;
    // b += a;
    // a = temp;
    // or
    [a, b] = [b, a + b];
  }
  return sum;
}

console.log(sumFibs(10));
