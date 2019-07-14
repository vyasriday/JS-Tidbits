/**
 * For a given string capitalize the first letter of each word
 */

function capitalize(string) {
  return string
    .split('')
    .reduce((capitalized, char, index, stringArray) => {
      if (index === 0 || stringArray[index - 1] === ' ') {
        return [...capitalized, char.toUpperCase()];
      } else {
        return [...capitalized, char];
      }
    }, [])
    .join('');
}

capitalize("Hey I'm going to be capitalized!!!");
