'use strict';

const findBestEmployee = function (employees) {
  const employeesKeys = Object.values(employees);
  let max = employeesKeys[0]; 
  
  for (let i = 1; i < employeesKeys.length; i += 1) {
    if (max < employeesKeys[i]) {
      max = employeesKeys[i];
    }
  }

  const maxEmployee = employeesKeys.indexOf(max);  
  const value = Object.keys(employees);
   
  let summary = value[maxEmployee];

  return summary;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux