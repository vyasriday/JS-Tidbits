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



// infinite currying
// Implement currying sum(1)(2)() => 3, sum(1,2)(3,4)(5)(6,7,8)() => 34
function sum(...args) {
 if(args.length === 0) {
	 return this.total;
 }

 return (function(self) {
	 if(self.total) {
		 self.total +=  args.reduce((total, current) => total+current,0);
	 } else {
		 self = {total: args.reduce((total, current) => total+current,0) }

	 }

	 return sum.bind(self);
 })(this);
}
