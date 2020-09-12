/**
 * write a function maskify, which takes a string input and changes all but the last four characters into '#'.
 */

function maskify(cc) {
  let maskedString = '';
  let len = cc.length;
  for (let index = 0; index < cc.length; index++) {
    if (index >= len - 4) {
      maskedString += cc[index];
    } else {
      maskedString += '#';
    }
  }
  return maskedString;
}

console.log(maskify('1111444433332222')); // '############2222'
