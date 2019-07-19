/*
 * Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas except for the last two names, which should be       separated by an ampersand.
 * list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // Bart, Lisa & Maggie'
 */

function list(names) {
  let sentence = names.reduce((sentence, value, index, names) => {
    if (index + 1 === names.length - 1) {
      sentence = sentence + value.name + ' & ';
      return sentence;
    } else {
      sentence =
        index === names.length - 1
          ? sentence + value.name
          : sentence + value.name + ', ';
      return sentence;
    }
  }, '');
  return sentence;
}

list([{ name: 'Hridayesh' }, { name: 'Sharma' }]); // 'Hridayesh & Sharma'
