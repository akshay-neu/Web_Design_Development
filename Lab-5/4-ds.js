// Array can hold a collection of items
let array = [];
array.push(1);
array.push(1);
console.log(array);
console.log('');

// Set is a collection without duplicates
let noDuplicate = new Set();
noDuplicate.add(1);
noDuplicate.add(1);
console.log(noDuplicate);
console.log('');

// Map is a collection of key value pairs
let map = new Map();
map.set('first', 1);
map.set('second', 2);

console.log(map);
console.log(map.get('first'));
