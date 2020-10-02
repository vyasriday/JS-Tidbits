/**
 * Implementation Of Heap Sort
 * Example :
 * Input => [60, 20, 35, 32, 100, 69, 42, 58]
 * Output => [
     20, 32, 35,  42,
     58, 60, 69, 100
    ]

 */

let arrayLength = 0;

function heapRoot(input, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrayLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrayLength && input[right] > input[max]) {
    max = right;
  }

  if (max !== i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}

function swap(input, indexA, indexB) {
  [input[indexA], input[indexB]] = [input[indexB], input[indexA]];
}

function heapSort(input) {
  arrayLength = input.length;

  for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrayLength--;

    heapRoot(input, 0);
  }
}

const arr = [60, 20, 35, 32, 100, 69, 42, 58];

heapSort(arr);
console.log(arr);