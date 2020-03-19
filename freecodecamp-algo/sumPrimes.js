"use strict";

function sumPrimes(num) {
  if (num < 2) return 0;

  const primeNumbers = [];

  for (let i = 2; i <= num; i++) {
    let isComposite = false;
    for (let p of primeNumbers) {
      if (i % p === 0) {
        isComposite = true;
        break;
      }
    }

    if (!isComposite) {
      primeNumbers.push(i);
    }
  }

  // let sum = 0;
  // for (let a of primeNumbers) {
  //   sum += a;
  // }
  let sum = primeNumbers.reduce((a, p) => {
    return a + p;
  }, 0);
  console.log(sum);
}

sumPrimes(10);
