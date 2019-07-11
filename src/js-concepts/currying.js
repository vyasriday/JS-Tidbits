const currying = function(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
};

console.log(currying(2)(3)(4));
