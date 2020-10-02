/**
 * Implementation of Comb Sort
 * Input => [10,23,46,21,100,89,101]
 * Output => [
  10,  21,  23, 46,
  89, 100, 101
]
 *
 */
function combSort(list) {
  if (list.length === 0) {
    return list;
  }
  const shrink = 1.3;
  let gap = list.length;
  let isSwapped = true;
  let i = 0;

  while (gap > 1 || isSwapped) {
    // Update the gap value for a next comb
    gap = parseInt(parseFloat(gap) / shrink, 10);

    isSwapped = false;
    i = 0;

    while (gap + i < list.length) {
      if (list[i] > list[i + gap]) {
        [list[i], list[i + gap]] = [list[i + gap], list[i]];
        isSwapped = true;
      }
      i += 1;
    }
  }
  return list;
}
const arrOrignal = [10, 23, 46, 21, 100, 89, 101];
const arrSorted = combSort(arrOrignal);
console.log(arrSorted);
