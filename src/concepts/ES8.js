// add padding to the start or end of a string

let str = "Hridayesh"
let paddedLeftStr = str.padStart(12, 'H'); // Add 12 - str.length whitespaces at the start and fill it with 'H' ('HHHHridayesh')
paddedStr = str.padStart(12); // '   Hridayesh'

paddedStr = str.padEnd(12); // 'Hridayesh   '


// add trailing commas in objects and function parameters list etc

let object = {
  name: 'Hridayesh',
  age: 22,
}

const fn = function(a,b,) {
  console.log(a,b)
}

fn(1,2,)


// Object.values() and Object.entries() and Object.keys()

let object = {
    name: 'Hridayesh',
    age: 22,
    job: 'Engineer',
}

Object.keys(object) // ['name', 'age', 'job']
Object.values(object) // ['Hridayesh', 22, 'Engineer']
Object.entries(object)// [['name', 'Hridayesh'], ['age', 22], ['job', 'Engineer']]

