"use strict";

function sumAll(arr) {
  let min, max;

  // if (arr[0] > arr[1]) {
  //   max = arr[0];
  //   min = arr[1];
  // } else {
  //   max = arr[1];
  //   min = arr[0];
  // }

  // use Ternery instead
  // arr[0] > arr[1]
  //   ? ((max = arr[0]), (min = arr[1]))
  //   : ((max = arr[1]), (min = arr[0]));

  let sum = 0;
  // for (let i = min; i <= max; i++) {
  //   sum += i;
  // }

  // Or instead you can use built in function
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 6]));
