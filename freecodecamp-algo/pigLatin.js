"use stricy";

function pigLatin(str) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  if (VOWELS.includes(str[0])) {
    return `${str}-way`;
  }

  if (str.split("").every(ch => !VOWELS.includes(ch))) {
    return `${str}-ay`;
  }

  const consonantCluster = str.split(/[aeiou]/)[0];

  return str.substring(consonantCluster.length) + consonantCluster + "-ay";
}

console.log(pigLatin("rrrrwhat"));
