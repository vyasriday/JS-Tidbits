/*
for a given value of n, print a star pattern starting from 1 star each line to n stars in the last line
*/

const starPattern = (n) => {
     for(let i = 1; i <= n; i++) {
        let pattern = "";
        for(let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
     
     /* Another solution you can try
    for(let i=1; i<=n; i++){ 
        console.log("*".repeat(i));
        // Docs about repeat function
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    }
    */
}

starPattern(5);

/*
* 
* * 
* * * 
* * * * 
* * * * * 
*/
