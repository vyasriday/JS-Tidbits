/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

1) All letters in this word are capitals, like "USA".
2) All letters in this word are not capitals, like "leetcode".
3) Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.

Input: "USA"
Output: True

Input: "FlaG"
Output: False
*/

const detectCapitals = (word) => {
  if (word.length === 0 || word.length === 1) return true;
  if (word.toUpperCase() === word) return true; // case 'USA'
  if (word.toLowerCase() === word) return true; // case 'leetcode'
  if (word[0] + word.substring(1) === word) return true; // case 'Google'
  return false;
};
