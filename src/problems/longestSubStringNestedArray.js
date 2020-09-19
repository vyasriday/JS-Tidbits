// helper function
function isArray(value) {
  return value && typeof value === "object" && value.constructor === Array
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}



// using simple for loop
function longestString(arr) {
  var largestStr = "";
  for (var i = 0; i < arr.length; i++) {
    var currentStr;
    if (isArray(arr[i])) {
      currentStr = longestString(arr[i]);
    } else if (isString(arr[i])) {
      currentStr = arr[i];
    }
    if (currentStr.length > largestStr.length) {
      largestStr = currentStr;
    }
  }
  return largestStr;
}

// using reduce function
function longestString(arr) {
  return arr.reduce(function(acc, curr) {
    var currentStr;
    if (isArray(curr)){
      currentStr = longestString(curr)
    } else {
      currentStr = curr; 
    }
    return currentStr.length > acc.length ? currentStr : acc;
  }, '')
}


// test case

const stringArray = ["pa", "abd", ["abcd", "derfg", ["asdasd", "DGdgdfsgJHAHAGyqyqu", "gjhsgfjgjhgjhg", "safgjgsjfhagjhgsdfsadfiooioioioioioi"], "llkllklk", "qttwrtr"], "sdafasdf", "jhsajhfjhajshfkuiu", "sadfsafsd"];

console.log(longestString(stringArray) === "safgjgsjfhagjhgsdfsadfiooioioioioioi"); // true;