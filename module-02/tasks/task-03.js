'use strict';

const findLongestWord = function (string) {

  if (!/^[a-zA-Z0-9\s]*$/.test(string)) {
    return 'Строка содержит посторонние символы!';
  }

  let arr = string.split(' ');
  let word = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
};
 
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'