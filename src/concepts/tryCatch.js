/*
 * In Javascript pre ES6 i.e ES5 the catch block and try  block in try...catch block creates a block scope and variables declared
 * inside both try and catch  block are accessible only inside catch block else ReferenceError is thrown.
 */

function tryCatch() {
  let outer = 12;
  console.log(outer); // 12
  try {
    let inTry = 'Available in function scope';
    console.log(inTry);
  } catch (err) {
    let inCatch = 'Block scoped to catch block';
    console.log(inCatch);
  }
  console.log(inTry); // ReferenceError: inTry is not defined
  console.log(inCatch); // ReferenceError: inCatch is not defined
}

tryCatch();
