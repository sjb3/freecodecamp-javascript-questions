"use strict";

// 1) must be all lower case
// 2) _ and " " become hyphen
// 3) Capital case determines the start of the new word.  But not all words start with capital case.

function spinalCase(str) {
  let splitted = str
    .split("")
    .map(ch => (ch === ch.toUpperCase() ? `-${ch.toLowerCase()}` : ch))
    .join("")
    .split(/[_ -]+/)
    .filter(word => word.length)
    .join("-");

  return splitted;
}

console.log(spinalCase("-This is a spinal tap!"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Telletubbies say Eh-hau"));
console.log(spinalCase("-Telletubbies say Eh_hau"));
