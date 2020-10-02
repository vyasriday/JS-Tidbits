/*
  for a given string return true if it's the same string when reversed. For example for a string abba when it is reversed
  we get abba. So this is a palindrome
*/

palindrome = (string) => {
  let reversedString = string
    .split('')
    .reduce((reversed, character) => character + reversed, '');

  return reversedString === string;
};

// palindrome of a string using every array helper method

palindromeUsingEvery = (string) => {
  return string
    .split('')
    .every(
      (character, index) => character === string[string.length - index - 1]
    );
};

//  palindrome for a given number using reduce method

palindromeForANumber = (number) => {
  let reversedNumber = number
    .toString()
    .split('')
    .reduce((reversed, currentValue) => currentValue + reversed, '');
  return +reversedNumber === number;
};

// palindrome without array helper method

palindromeForANumberWithoutReduce = (number) => {
  let num = number;
  let arr = [];
  while (num > 0) {
    let mod = num % 10;
    num = Math.floor(num / 10);
    arr.push(mod);
  }
  return +arr.join('') === number;
};

//palindrome of a number by converting to string and simple iteration
const numberPalindromeWithString = (num) => {
  var s = num.toString();
  var reverse = '';
  var i;
  for (i = s.length; i >= 0; i--) {
    reverse = reverse + s.charAt(i);
  }
  if (reverse === s) return s + ' is a plindrome';
  else return s + ' is not a palindrome';
};
