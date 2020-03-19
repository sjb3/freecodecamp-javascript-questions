"use strict";

const missingLetter = str => {
  // let output = "";

  // for (let i = 0; i < str.length - 1; i++) {
  //   const currCode = str.charCodeAt(i);
  //   const nextCode = str.charCodeAt(i + 1);
  //   if (nextCode - currCode !== 1) {
  //     output = String.fromCharCode(currCode + 1);
  //     break;
  //   }
  // }
  // if (output === "") return undefined;
  // return output;

  // refactor below

  return str.split("").reduce((acc, c, i, arr) => {
    if (!arr[i + 1]) return acc;

    const curr = c.charCodeAt(0);
    const next = arr[i + 1].charCodeAt(0);

    if (next - curr !== 1) {
      return String.fromCharCode(curr + 1);
    }
    return acc;
  }, undefined);
};

console.log(missingLetter("abce"));
