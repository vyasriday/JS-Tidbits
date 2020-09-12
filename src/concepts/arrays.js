var arr = [1,2,3,4,5]

// forEach
arr.forEach(val => {
  // run this functon for each value in array
})

// map
var arrMapped = arr.map(value => value*2)
log(arrMapped) // [2,4,6,8,10]

// filter
arr.filter(val => val > 2) // [3]

// reduce 

arr.reduce((accumulator, element) => accumulator+element ) // 6
