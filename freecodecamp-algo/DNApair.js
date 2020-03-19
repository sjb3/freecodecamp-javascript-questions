"use strict";

const dnaDict = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

// refactor
const pairElement = str => {
  return str.split("").map(el => [el, dnaDict[el]]);
};

// function pairElement(str) {
//   // 2)
//   // const output = [];
//   // for (const i of str) {
//   //   output.push([i, dnaDict[i]]);
//   // }

//   // return output;

//   // 1)
//   // let output = [];
//   // for (const i of str) {
//   //   if (i === "G") {
//   //     output.push([i, "C"]);
//   //   } else if (i === "C") {
//   //     output.push([i, "G"]);
//   //   } else if (i === "A") {
//   //     output.push([i, "T"]);
//   //   } else if (i === "T") {
//   //     output.push([i, "A"]);
//   //   }
//   // }
//   // return output;
// }

console.log(pairElement("ATT"));
