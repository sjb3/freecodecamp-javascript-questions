"use strict";

const items = [
  { name: "Rent", price: 1170 },
  { name: "TV monitor", price: 20 },
  { name: "Grocery", price: 10 },
  { name: "Book", price: 10 },
  { name: "Phone", price: 300 },
  { name: "Computer", price: 1200 },
  { name: "Keyboard", price: 25 }
]; // => return boolean value only

/* Filter */

// const filteredItems = items.filter(item => {
//   return item.price >= 1000;
// return items.price === 10;
// });

// console.log(items);
// console.log(filteredItems);

/* Map */

// const itemNames = items.map(item => {
//   return `${item.name} => $${item.price}`;
// });

// console.log(itemNames);

/* Find */

// const foundItem = items.find(item => {
//   return item.name === "Rent";
// });

// console.log(foundItem);

/* For Each */

// items.forEach(item => {
//   // console.log(item.name);
//   item.price >= 500 ? console.log("Darn expensive!!!") : console.log("BETTER");
// });

/* Some */
// return boolean value only
// const hasInexpensiveItems = items.some(item => {
//   return item.price <= 100;
// });

// console.log(hasInexpensiveItems);

/* Reduce */

// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);

// console.log(total);
