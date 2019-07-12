/* 
  reverseString takes a string as input and returns the reversed string as the output
*/

// Method 1 - Using a simple for loop and array
reverseString = string => {
  let arr = [];
  for (let i = 0, len = string.length; i < len; i++) {
    arr[i] = string[len - i - 1];
  }
  return arr.join('');
};

// Method 2 - Using a for of loop

reverseStringWithForOf = string => {
  let reversedString = '';
  for (let character of string) {
    reverseString = character + reverseString;
  }
  return reverseString;
};

// Method 3 - using array reduce helper function

reverseStringWithReduce = string =>
  arr.split('').reduce((reversed, character) => character + reversed, '');

// Method 4  using built in reverse method for arrays

reverseStringWithReverse = string =>
  string
    .split('')
    .reverse()
    .join('');
