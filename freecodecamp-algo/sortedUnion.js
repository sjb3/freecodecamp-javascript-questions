"use strict";

function uniteUnique(arr) {
  const arrFrom = [...arguments];
  // const output = [];
  // for (const arr of arrFrom) {
  //   for (const el of arr) {
  //     if (!output.includes(el)) {
  //       output.push(el);
  //     }
  //   }
  // }
  // console.log(output);

  // refactor
  // convert the arrays as a single array
  // reduce it as a single array
  const arrOfArrEl = arrFrom.reduce((acc, currArr) => {
    return [...acc, ...currArr];
  }, []);

  let result = [];

  for (const el of arrOfArrEl) {
    !result.includes(el) ? result.push(el) : null;
  }

  // or you can use the Set method
  // const set = new Set(arrOfArrEl)
  // return [...set]
  console.log(result);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
