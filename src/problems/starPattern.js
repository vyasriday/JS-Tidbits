/*
for a given value of n, print a star pattern starting from 1 star each line to n stars in the last line
*/

// Method 1 - Using for loop
const starPattern = (n) => {
    for(let i = 1; i <= n; i++) {
        let pattern = "";
        for(let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
    }
}

// Method 2 - Using for loop and repeat function
const starPatternWithRepeat = (n) => {
	for(let i=1; i<=n; i++) {
		console.log("* ".repeat(i));
	} 
}

// Method 3: Using Array.fill

printStarArrayFill = (value) => {
    for(let i = 1; i <= value; ++i)
    {
        console.log(Array(i).fill('*').join(''));
    }
  };

starPattern(5);
//starPatternWithRepeat(5);

/*
* 
* * 
* * * 
* * * * 
* * * * * 
*/
