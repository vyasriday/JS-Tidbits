/**
 * SETS
 * A set which is similar to a javascrpit array lets u store unique values of any type (boolean, objects, strings etc...).
 * Every value in the set occurs only once
 */

const set = new Set();
set.add(1); // adds 1 into the set
set.add('hello'); // adds 'hello' to the set
const object = { name: 'jhon doe', place: 'hyderabad' };
set.add(object); // add object into the set
set.has(1); // -> true (we use set.has() to check id the value exists in the set or not)
set.delete(1); // deletes 1 from the set
console.log(set);
