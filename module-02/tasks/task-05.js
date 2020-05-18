'use strict';

const checkForSpam = function (message) {
  
  const lowerText = message.toLowerCase();
  const isTrue = lowerText.includes('sale') || lowerText.includes('spam');

  if (isTrue) {
    return true;
  }
  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true 
