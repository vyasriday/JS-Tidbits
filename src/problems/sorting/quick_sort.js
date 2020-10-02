// Quick sort algorithm in JS.
/**
   @param {Array} arr Input array.
    @param {Number} left Input left end number.
    @param {Number} right Input right end number.
    @return {Array} Sorted array.
*/

module.exports = {
    quickSort: (arr, left, right) => {
      let pivot, partitionIndex;
  
      if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
  
        // sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
      }
      return arr;
    },
  };
  
  /**
   * This function  keep move all the items smaller than the pivot value to the
   * left and larger than pivot value to the right
   */
  function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot],
      partitionIndex = left;
  
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
  }
  
  /** This function to swap values of the array. */
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
