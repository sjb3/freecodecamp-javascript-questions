"use strict";

// Symmetric diff of two arrays
function diffArray(arr1, arr2) {
  // const newArr = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       newArr.push(arr1[i]);
  //     }
  //     union.push(arr2[j]);
  //   }
  // }
  // return newArr;

  const union = []; // unique arr with elements from two arrays

  const union2 = new Set([...arr1, ...arr2]);
  // console.log(">>>", union2);
  // this ECMA6 set does the below by single line

  for (let i = 0; i < arr1.length; i++) {
    if (!union.includes(arr1[i])) {
      union.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  }
  // return union;

  const symDiff = [];

  for (let i = 0; i < union.length; i++) {
    let curr = union[i];

    if (arr1.includes(curr) && !arr2.includes(curr)) {
      symDiff.push(curr);
    } else if (!arr1.includes(curr) && arr2.includes(curr)) {
      symDiff.push(curr);
    }
  }
  return symDiff;
}
console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]));
