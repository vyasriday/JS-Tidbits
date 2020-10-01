const currying = function(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
};

currying(2)(3)(4);

// currying using es6 arrow functions

const es6Currying = (x) => (y) => (z) => x+y+z;
es6Currying(2)(3)(4);


// Adding advanced currying implementation, create a function arguments into currying 


function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}


// example 

function multiply(a, b, c) {
  return a * b * c;
}

let curriedMul = curry(multiply);

console.log(curriedMul(1, 2, 3) ); // 6, still callable normally
console.log(curriedMul(1)(2,3) ); // 6, currying of 1st arg
console.log(curriedMul(1)(2)(3) ); // 6, full currying