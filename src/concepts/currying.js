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
