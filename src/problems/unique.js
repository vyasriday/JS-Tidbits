/**
 * unique is a function that takes an array as argument and returns the array of unique elements from the array
 */

function unique(array) {
  return array.reduce((uniqueArray, currentValue) => {
    if (!uniqueArray.includes(currentValue)) {
      return [...uniqueArray, currentValue];
    } else {
      // the callback must return some value which will be used as the first argument for next iteration
      return uniqueArray;
    }
  }, []);
}

unique([1, 2, 3, 4, 1, 1, 3, 12]); // [ 1, 2, 3, 4, 12 ]

// Shorthand using Set

let uniqueArray = [...new Set([1, 2, 3, 4, 1, 1, 3, 12])];

uniqueArray; // [1,2,3,4,12]
