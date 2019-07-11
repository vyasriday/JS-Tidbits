/*
  The follwing functions takes two arguments and returns the number of times the passed number occues in that range. 
  For example between 1 to 27 the number 7 occues 3 times. Once in 7 then in 17 and third time in 27 
*/
function countOccurences(lower, higher, number) {
  counter = 0
  for(var iteratedNumber = lower; iteratedNumber<= higher; iteratedNumber++){
        if(iteratedNumber.toString().includes(number)) {
        let arr = numString.split('');
        let count = 0
        arr.forEach(a => {
        if(a == number)
          count++	
      })
      counter += count
    }
  }
  return counter;
}

// optimized solutiom
function countOccurencesOptimized(lower, higher, number) {
  let counter = 0
  for(var iteratedNumber = lower; iteratedNumber<= higher; iteratedNumber++){
        if(iteratedNumber.toString().includes(number)) {
        	counter += iteratedNumber.toString().split('number').length - 1
    }
  }
  return counter;
}



