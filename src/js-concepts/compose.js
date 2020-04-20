const compose = (f,g) => (x) => f(g(x))
const sum = (num) => num + 1
const multiply = (num) => num*2
compose(sum, multiply)(2) // 5
