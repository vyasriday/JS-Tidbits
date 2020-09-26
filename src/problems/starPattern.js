/*
for a given value of n, print a star pattern starting from 1 star each line to n stars in the last line
*/

const starPattern = (n) => {
    for(let i=1; i<=n; i++){ 
        console.log("*".repeat(i)); // Repeat "*" by i
    }
}

starPattern(5);

// Docs about repeat function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

/*
* 
* * 
* * * 
* * * * 
* * * * * 
*/
