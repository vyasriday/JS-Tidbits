// Test case of quick sort algo.
const quick_sort_test = require("./quick_sort.js");

const input = [11, 8, 14, 3, 6, 2, 7];
const left = 0;
const right = 6;
const sorted = quick_sort_test.quickSort(input, left, right);
console.log("Quick sort output: ", sorted);