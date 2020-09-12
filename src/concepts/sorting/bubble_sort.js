/* 
  Bubble Sort to sort elements in array in ascending order
*/
function bubbleSortAscending(array) {
  // Loop for each array index
  for (let i = 0; i < array.length; i++) {
    // for each inner loop completion the largest number is bubbled out to end
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // if ith elemenet is larger than i+1th swap the two
        let temporary = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporary;
      }
    }
  }

  return array;
}

console.log(bubbleSortAscending([3, 5, 1, 11, 4, 1, 21, 19, 17, 6]));

/*
  Sort in descending order
*/

function bubbleSortDescending(array) {
  // Loop for each array index
  for (let i = 0; i < array.length; i++) {
    // for each inner loop completion the largest number is bubbled out to end
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        // if ith elemenet is larger than i+1th swap the two
        let temporary = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporary;
      }
    }
  }

  return array;
}

console.log(bubbleSortDescending([3, 5, 1, 11, 4, 1, 21, 19, 17, 6]));
