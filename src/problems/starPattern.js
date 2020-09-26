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
    }
}

starPattern(5);

/*
* 
* * 
* * * 
* * * * 
* * * * * 
*/