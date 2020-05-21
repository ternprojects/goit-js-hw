'use strict';

debugger;

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {

  console.log(`Adding ${itemName} to inventory`);
  this.items.push(itemName);
  },

  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    console.log(`Removing ${itemName} from inventory`);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']