/*
* Implementation of Insertion Sort
* Example : 
* Input => [10,35,85,46,100,23,41] 
* Output => [
  10, 23,  35, 41,
  46, 85, 100
]
* 
*/
function insertionSort(unsortedList) {
  var len = unsortedList.length;
  for (var i = 1; i < len; i++) {
    var tmp = unsortedList[i]; // Copy of the current element.
    /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
    for (var j = i - 1; j >= 0 && unsortedList[j] > tmp; j--) {
      // Shift the number
      unsortedList[j + 1] = unsortedList[j];
    }
    // Insert the copied number at the correct position
    // in sorted part.
    unsortedList[j + 1] = tmp;
  }
}

var arr = [10, 35, 85, 46, 100, 23, 41];
insertionSort(arr);
console.log(arr);
