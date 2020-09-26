/**
 * for a number n prints pyramid of star isgns
 * for example printStar(5) ->
    *
    **
    ***
    ****
    *****
 */

// Method 1 - Using a simple for loop and string Repeat
printStarRepeat = (value) => {
    for(let i = 1; i <= value; ++i)
    {
        console.log('*'.repeat(i));
    }
  };
  
// Method 2 - Using a simple for loop and Instantiate new array fill with various count of star signs then combime them
printStarArrayFill = (value) => {
    for(let i = 1; i <= value; ++i)
    {
        console.log(Array(i).fill('*').join(''));
    }
  };