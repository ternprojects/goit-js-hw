'use strict';

const countTotalSalary = function (employees) {
  const salariesSum = Object.values(employees);
  let sum = 0;
  
  for (const value of salariesSum) {
    sum += value;
  }
  return sum;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400