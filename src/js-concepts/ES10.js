// Array.flat()

let arr = [1,2,3,4,[2,3, [1]]]
arr.flat() // [1,2,3,4,2,3,[1]] // be default flat() goes 1 level deep
arr.flat(2) // [1,2,3,4,2,3,1] // you can pass a number to tell flat() to go any levels deep

// we can also use flat() to clean the data

let entries = ['bob', 'jess', , , , , , , , , 'josh']
entries.flat(); // ['bob', 'jess', 'josh']

// Array.flatMap() : to use map method on flattened array upto depth 1

entries.flatMap(entry => 'Hi ' + entry) //  ['Hi bob', 'Hi jess', 'Hi josh']


// String.trim(), trimEnd() and trimStart()

let str = '      Hirdayesh      ';
str.trim() // 'Hridayesh', trims on both left and right
str.trimStart() // 'Hridayesh      ', trims the start
str.trimEnd() // '      Hridayesh', trims the end

// fromEntries : opposite of Objecy.entries()
let userProfiles = [['commander', 23], ['derek', 24]] // array of userProfiles in array
Object.fromEntries(userProfiles) // {commander: 23, derek: 24}

// try catch : we do not necessarily need to use error parameter in catch

try {
} catch {
 // catch(e) earliers. now it is optional. use only if you need to access error argument
}
