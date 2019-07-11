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



