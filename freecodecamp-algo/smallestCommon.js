function smallestCommon(arr) {
  // let small, big;

  // if (arr[0] > arr[1]) {
  //   big = arr[0];
  //   small = arr[1];
  // } else {
  //   big = arr[1];
  //   small = arr[0];
  // }
  let small = Math.min(...arr);
  let big = Math.max(...arr);

  let scm = big;

  while (true) {
    let isSCM = true;

    for (let i = small; i <= big; i++) {
      if (scm % i !== 0) {
        isSCM = false;
        break;
      }
    }

    if (isSCM) {
      return scm;
    } else {
      scm++;
    }
  }
}

console.log(smallestCommon([10, 2]));
