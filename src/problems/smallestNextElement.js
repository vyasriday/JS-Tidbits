/** 
* For a given array a[],  return the next smallest element to the right of every a[i] excluding the current element.
* If there is no element on the right return the element itself.
For example in array [3,21,4,7,6] -> [{ pos: 0, nextSmallest: 4}, {pos: 1, nextSmallest: 4}, {pos: 2, nextSmallest: 6},{pos: 3, nextSmallest: 6},{pos: 3, nextSmallest: 6}]
*/

function findNextSmallest(array) {
  let arrayOfSmallestNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      arrayOfSmallestNumbers.push({ position: i, nextSmallest: array[i] });
      return arrayOfSmallestNumbers;
    }
    let smallest = array[i + 1];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
      }
    }
    arrayOfSmallestNumbers.push({ position: i, smallest });
  }
  return arrayOfSmallestNumbers;
}

console.log(findNextSmallest([9, 1, 4, 2, 7, 11]));
/*[{ position: 0, smallest: 1 },
  { position: 1, smallest: 2 },
  { position: 2, smallest: 2 },
  { position: 3, smallest: 7 },
  { position: 4, smallest: 11 },
  { position: 5, nextSmallest: 11 } ]
*/
