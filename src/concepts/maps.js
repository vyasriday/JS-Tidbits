/**
 * MAPS
 * Maps are similar to javascript objects which holds key value pairs and remembers the original insertion order of keys.
 */

const map = new Map();

map.set('name', 'jhon doe'); // we use map.set() to insert values into the maps.
map.set('address', { city: 'hyderabad', place: 'Charminar' }); // can store objects inside maps
map.has('name'); // -> true (we use map.has() tocheck if a key is existing inside a map)
map.get('name'); // -> 'jhon doe' (we use map.get() to get a value of a key inside the map)
map.delete('address'); // we use map.delete() to delete a key and its value inside a map
console.log(map);
