# JS Tidbits

### JS Tidbits is a collection of solutions of different programming problems as well as concepts in JavaScript.  

#### As part of Hacktoberfest I am inviting people to contribute to it.

#### How to Contribute

There are 3 different ways you can contibute:

  1. Know a Programming problem you want to solve in JavaScrpit, Go to **problems** folder inside **src** and add your solution file with a `.js` extension.
  2. You want to Provide example of any JavaScript concept, Go to **concepts** folder inside **src** and add your file with proper examlpe.
  3. See a bug, a code not working, or you think you can write a better code, fix it and raise a PR.
  
 NOTE: 
  - Please do not copy paste code from the internet and add in here!
  - Your code must be working


## ⚠️ Before Creating a PR for any issue
Please Check if Someone has already been assigned the task or not. After creating PR ask for assigning the task to yourself.

--------
</br>

## Table of Contents

### Concepts

| Concept Name          | Link          | Description     |   
| ----------------------|-------------- | --------------- |
| Arrays                | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/arrays.js)              | Is a special variable, which can hold more than one value at a time and of different data types. |
| Async Await           | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/asyncAwait.js)          | ```async``` is used to specify that a function will return a 'promise', ```await``` makes JS wait til the promises is resolve (like a promise in real life it could be true or false) |
| Compose               | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/compose.js)             | ```compose``` takes a series of single parameters functions that are used as the parameters of the previous function. |
| Console               | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/console.js)             | ```console``` is used in the debugging process, it will display a message in the web console, it has methods as ```log()```, ```error()```, ```warn()```, etc |
| Currying              | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/currying.js)            | Currying allows to translate a function from callable as f(a, b, c) into callable as f(a)(b)(c). |
| ES7                   | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/ES7.js)                 | ES7🌟 features: array.prototype.includes and exponentiation operator |
| ES8                   | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/ES7.js)                 | ES8 features: object.values, object/entries, string padding |
| ES10                  | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/ES10.js)                | ES10: Array.flat(), Array.flatMap(), String.trim(), trimEnd() and trimStart(), Object.fromEntries and Optional Catch Binding |
| Lexical Scope         | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/lexicalScope.js)        | Lexical scoping refers to how variables in nested functions/inner levels can access to its outer levels (function scope, global scope) |
| Prototype Inheritance | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/prototypalInheritance.js)| A prototype object is a template object, from which other objects can inherit methods and properties. |
| Try - Catch           | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/concepts/tryCatch.js)   | ```try{} catch {}``` statement allows to *try* a block of code and setting in *catch* the block of code you want to execute if an exception is thrown |

</br>

🌟 ES stands for [ECMA](https://www.ecma-international.org) Script, which is a javascript standard. ES goes along to the numbrer corresponding to its release as ES6, ES7, etc.

---------
</br>

### Problems

| Problem                   | Link          | Description     |   
| --------------------------|-------------- | --------------- |
| Capitalize                | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/capitalize.js) | Capitalize the first letter of a string given |
| Count ocurrencies of a number in a range      | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/countOccurencesOfANumberInARange.js) | Find how many times that number appear in a range! The function will take 3 arguments, 2 to set the range and the number to find. | 
| Duplicate                 | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/duplicate.js) | Duplicate an array/string by the given number. |
| Format String           | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/formatStringFromArray.js) | Function that retunrs the format of ```'Name1, Name2, .. & NameN'``` , being each ```Name#``` a value in an array given. |
| Longest distinct substring| [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/longestDistinctSubstring.js) | Function that returns the longest string of non repeated characters. |
| Longest substring nested  | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/longestSubStringNestedArray.js) | Function the finds the longest substring in a array with nested arrays | 
| Maskify                   | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/maskify.js) | Function that converts every character given into # but the last 4 characters. |
| Max char                  | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/maxChars.js) | Function that finds the character most repeated in an string, the function should return the char and the amount of times it appears. |
| Palindrome                | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/palindrome.js) | Function that returns true if the string given is a palindrome (a word that is read the same when its reversed). You'll find 4 diff ways to solve it in the file. |
| Smallest next element     | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/smallestNextElement.js) | Function that finds the next smallest element in the right (it could be 2 or more positions away) for a given array. | 
| Start Pattern             | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/starPattern.js) | Function that creates a start pattern ~ triangle, starting with 1 * til it reaches the given number.
```
* 
* * 
* * * 
* * * * 
* * * * *
```

| String Reversal           | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/stringReversal.js) | Function that takes a string and returns the string reversed. | 
| Unique                    | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/unique.js) | This function takes an array and returns only the unique elements (excludes the elements that are a repetition of a previous element) |

</br>

**Graphs** 📊

| Problem               | Link          | Description     |   
| ----------------------|-------------- | --------------- |
| Dijkstra Algorithm    | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/Graphs/Dijkstra_algorithm.js) | The Dijkstra Algorithm consists in finding the shortest paths from a source to all vertices of a given graph. You'll find a function for creating the graph and also one for solving using the Dijkstra Algorithm |

</br>

**Searching** 🕵🏽‍♂️

| Problem               | Link          | Description     |   
| ----------------------|-------------- | --------------- |
| Binary Search         | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/Searching/binary_search.js) | The Binary Search algorithm consists in finding an item from an array by dividing it in half until you go to all the items. In this function you'll see the implementation of Binary Search and use of recursion. |
| Linear Seacrh         | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/Searching/linearsearch.js)  | The Binary Search algorithm consists in finding an item from an array by looking every element in a swequential way. |

</br>

**Sorting** 🧹

| Problem               | Link          | Description     |   
| ----------------------|-------------- | --------------- |
| Bubble sort           | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/bubble_sort.js) | This algorithm consist in sorting an element in an array by swapping the item visited by the adjacent element if they are not in a correct order. You'll find a function for ascending and another for descending bubble sort in the link. |
| Comb sort             | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/comb_sort.js) | This algorithm, as Bubble Sort, swaps 2 elements in an array if they are not in the correct order, but it doesn't look for the adjacent one, Comb Sort uses a gap that starts with the length of the array and shrinks by a factor of 1.3 in every iteration. |
| Heap sort             | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/heap_sort.js)  | This algorithm compares the elements of an array using [Binary Heap](https://www.geeksforgeeks.org/binary-heap/), it sorts by setting an element as a node, if the element is greater than the others, it goes to the highest node and gets remove of the the sorting map. |
| Insertion sort        | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/insertion_sort.js)  | This algorithm divides the given array into a sorted (first element, to start) and unsorted part. In the 'unsorted part': it takes the first element and it's placed in the correct position of the sorted part to create the ascending sort. |
| Merge sort            | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/merge_sort.js)  | Breaks down the array dividing it by two until it gets the individual elements, then it sorts and merges, this algorithm applies recursion. |
| Quick sort            | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/quick_sort.js)  | This algorithm consists in taking an element as a pivot, then comparing to the pivot, it looks for a larger item (starting from the left) and a smaller item (starting from the right), it swaps the values until it sets the pivot in the correct position of the array, to be in the correct position means to have all the smaller on left and all the larger on the right. After this, it applies recyrsion by chooseing a new pivot in each "division" (right and left). |
| Radix sort            | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/radix_sort.js)  | This algorithm sorts the numbers from least significant digit (U) to the most significant digit (T, H). |
| Selection sort        | [link](https://github.com/vyasriday/JS-Tidbits/blob/master/src/problems/sorting/selection_sort.js)  | This algorithm takes the first element as the sorted one and finds the minimun element in the rest of the array comparing to the sorted one, if it's necessary they are swap, then moves to the next element and do the same process. |