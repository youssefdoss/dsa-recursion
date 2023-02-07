/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i >= nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length) return 0;

  return Math.max(words[i].length, longest(words, i + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) return "";

  return str[i] + everyOther(str, i + 2);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val, i = 0) {
  if (i >= arr.length) return false;

  if (arr[i] === val) return true;

  return find(arr, val, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i > str.length / 2) return true;

  if (str[i] !== str[str.length - 1 - i]) return false;

  return isPalindrome(str, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  if (i < 0) return "";

  return str[i] + revString(str, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr.length === idx) return -1;
  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
  // Alternate option without strings passed in as parameter
  // let strings = [];
  // for (let key in obj) {
  //   if (typeof obj[key] === 'object') {
  //     strings.push(...gatherStrings(obj[key]));
  //   }
  //   if (typeof obj[key] === 'string') {
  //     strings.push(obj[key]);
  //   }
  // }
  // return strings;

  for (let key in obj) { // o(n)
    if (typeof obj[key] === "object") { // o(1)
      gatherStrings(obj[key], strings); // ????
    }
    if (typeof obj[key] === "string") { // o(1)
      strings.push(obj[key]); // o(1)
    }
  }
  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

// o(n^) solution with array slicing
// function binarySearch(arr, val) {
// if (!arr.length) return false;

// const middleIdx = Math.floor(arr.length / 2);
// const middleVal = arr[middleIdx];

// if (val === middleVal) return true;

// return middleVal > val
//   ? binarySearch(arr.slice(0, middleIdx), val)
//   : binarySearch(arr.slice(middleIdx + 1), val);
// }

// o(n) solution with left right pointers
function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return false;

  const middleIdx = Math.floor((left + right) / 2);
  const middleVal = arr[middleIdx];

  if (val === middleVal) return true;

  return middleVal > val
    ? binarySearch(arr, val, left, middleIdx - 1)
    : binarySearch(arr, val, middleIdx + 1, right);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;

  const middleIdx = Math.floor((left + right) / 2);
  const middleVal = arr[middleIdx];

  if (val === middleVal) return middleIdx;

  return middleVal > val
    ? binarySearchIndex(arr, val, left, middleIdx - 1)
    : binarySearchIndex(arr, val, middleIdx + 1, right);
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
