"use strict";

function isPalindrome(phrase) {
  if (
    phrase ==
    phrase
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  } else {
    return false;
  }
}

function check(phrase, shouldBePalindrome) {
  console.log(isPalindrome(phrase) === shouldBePalindrome ? "pass" : "FAIL");
}

check("abcba", true);
check("abcde", false);
check("Mr owl ate my metal worm", true);
check("Never Odd Or Even", true);
check("Never Even Or Odd", false);
