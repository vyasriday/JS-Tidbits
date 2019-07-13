/**
 * For a given string find the character and the character count that appears maximum no of times in the string
 */

const findMaxChar = string => {
  // array of unique characters in the string
  let arrayOfUniqueCharacters = string
    .split('')
    .reduce((uniqueArray, currentChar) => {
      if (!uniqueArray.includes(currentChar)) {
        return [...uniqueArray, currentChar];
      } else {
        return uniqueArray;
      }
    }, []);
  // count how many times each character occurs
  let charactersCountArray = [];
  for (let char of arrayOfUniqueCharacters) {
    let charOccurence = string.split(char).length - 1;
    charactersCountArray.push({
      char: [char],
      count: [charOccurence],
    });
  }
  return charactersCountArray.sort((a, b) => b.count - a.count)[0];
};

findMaxChar('aabbfffddddddddddbbbbccc');
