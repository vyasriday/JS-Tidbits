/* 
  Merge Sort to sort elements in array in ascending order
*/

function merge(firstHalf, secondHalf) {
  // This is an auxiliary function that will make the merging process
  let resultArray = [],
    firstHalfIndex = 0,
    secondHalfIndex = 0;

  while (
    firstHalfIndex < firstHalf.length &&
    secondHalfIndex < secondHalf.length
  ) {
    if (firstHalf[firstHalfIndex] < secondHalf[secondHalfIndex]) {
      resultArray.push(firstHalf[firstHalfIndex]);
      // Incrementing the index in order to check the next value on the next iteration
      firstHalfIndex++;
    } else {
      resultArray.push(secondHalf[secondHalfIndex]);
      // Incrementing the index in order to check the next value on the next iteration
      secondHalfIndex++;
    }
  }
  //This last destructuring add the last remanscent values from first and second half on the result array
  return [
    ...resultArray,
    ...firstHalf.slice(firstHalfIndex),
    ...secondHalf.slice(secondHalfIndex),
  ];
}

function mergeSortAscending(array) {
  //Checks if the testing array is unitary or empty, it can't be splitted if true
  if (array.length <= 1) {
    return array;
  }
  //The pivot is used to split the array in half, it need to be 'floored' so odd sized array can be used
  const pivot = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, pivot);
  const secondHalf = array.slice(pivot);
  //Calls itself recursively, best understanding of this algorithm can be found here: wikipedia.org/wiki/Merge_sort
  return merge(mergeSortAscending(firstHalf), mergeSortAscending(secondHalf));
}

console.log(mergeSortAscending([3, 5, 1, 11, 4, 1, 21, 19, 17, 6]));
