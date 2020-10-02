/**
 * Implementation of Binary Search
 */
function binarySearch(arr, x, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2);

  if (high >= low) {
    if (arr[mid] === x) {
      // item found => return its index
      return mid;
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      return binarySearch(arr, x, low, mid - 1);
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      return binarySearch(arr, x, mid + 1, high);
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    return -1;
  }
}

const arr = [10, 23, 56, 210, 1011];
const stringArr = [
  'contributor1',
  'admin',
  'Siddhant',
  'contributor2',
  'contributor3',
];

console.log(binarySearch(arr, 210)); // 3
console.log(binarySearch(arr, 24)); // -1

console.log(binarySearch(stringArr, 'Siddhant')); // 2
console.log(binarySearch(stringArr, 'Moderator')); // -1