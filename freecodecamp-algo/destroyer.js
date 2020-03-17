"use strict";

function destroyer(arr) {
  const argArr = [...arguments].slice(1);
  // 1)
  // const filteredArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (!argArr.includes(arr[i])) {
  //     filteredArr.push(arr[i]);
  //   }
  // }

  // 2) Higher Order Function
  const filteredArr = arr.filter(ea => !argArr.includes(ea));

  console.log(filteredArr);
}

destroyer([1, 2, 3, 1, 2], 3, 2);
