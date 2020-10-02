/**
 * Implementation of Quick Sort
 * Input => [10,36,23,24,28,43,101]
 * Output => [
  10, 23,  24, 28,
  36, 43, 101
]
 *  
 */
function quickSort(items) {
  var length = items.length;

  if (length <= 1) {
    return items;
  }
  var PIVOT = items[0];
  var GREATER = [];
  var LESSER = [];

  for (var i = 1; i < length; i++) {
    if (items[i] > PIVOT) {
      GREATER.push(items[i]);
    } else {
      LESSER.push(items[i]);
    }
  }

  var sorted = quickSort(LESSER);
  sorted.push(PIVOT);
  sorted = sorted.concat(quickSort(GREATER));

  return sorted;
}

var ar = [10, 36, 23, 24, 28, 43, 101];
ar = quickSort(ar);
console.log(ar);
