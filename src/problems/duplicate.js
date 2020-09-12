/**
 * for a given array or string duplicate it for x number of times if no frequency provided duplicate it once
 * for example duplicate([1,2,3,4,5], 2) -> [1,2,3,4,5,1,2,3,4,5]
 * 'hridayesh' -> 'hridayeshhridayesh'
 */

duplicate = (value, frequency) => {
  if (frequency === undefined) {
    frequency = 2;
  }

  if (typeof value === 'string') {
    duplicatedString = '';
    for (let count = 0; count < frequency; count++) {
      for (let char of value) {
        duplicatedString += char;
      }
    }
    return duplicatedString;
  } else if (Array.isArray(value)) {
    let duplicatedArray = [];
    for (let count = 0; count < frequency; count++) {
      duplicatedArray = [...duplicatedArray, ...value];
    }
    return duplicatedArray;
  } else {
    throw new TypeError('wrong type of value');
  }
};
