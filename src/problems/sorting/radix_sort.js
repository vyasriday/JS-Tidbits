/**
 * Implementation of Radix Sort
 * Input => [10,63,26,24,96,100,285,36]
 * Output => [
  10, 24,  26,  36,
  63, 96, 100, 285
]
 *
 */
function radixSort(items, RADIX) {
  // default radix is then because we usually count to base 10
  if (RADIX === undefined || RADIX < 1) {
    RADIX = 10;
  }

  var maxLength = false;
  var placement = 1;

  while (!maxLength) {
    maxLength = true;
    var buckets = [];

    for (var i = 0; i < RADIX; i++) {
      buckets.push([]);
    }

    for (var j = 0; j < items.length; j++) {
      var tmp = items[j] / placement;
      buckets[Math.floor(tmp % RADIX)].push(items[j]);
      if (maxLength && tmp > 0) {
        maxLength = false;
      }
    }

    var a = 0;
    for (var b = 0; b < RADIX; b++) {
      var buck = buckets[b];
      for (var k = 0; k < buck.length; k++) {
        items[a] = buck[k];
        a++;
      }
    }
    placement *= RADIX;
  }
  return items;
}

var ar = [10, 63, 26, 24, 96, 100, 285, 36];
radixSort(ar);
console.log(ar);
