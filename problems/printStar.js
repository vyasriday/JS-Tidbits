/**
 * for a number n prints pyramid of star isgns
 * for example printStar(5) ->
    *
    **
    ***
    ****
    *****
 */

printStar = (value) => {
    for(let i = 1; i <= value; ++i)
    {
        console.log('*'.repeat(i));
    }
  };
  