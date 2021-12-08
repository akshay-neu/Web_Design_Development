let numbers = [1, 2, 3, 4, 5];
let obj = { a: 1, b: 2, c: 3};
let copy;

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("for loop: array item: " + numbers[i]);
}
console.log("\n");//line break

// for of
for (let item of numbers) {
  console.log("for of: array item: " + item);
}
console.log("");//line break
for (let item of "Hello") {
  console.log("for of: string character: " + item);
}
console.log("\n");//line break

// for in
for (let key in obj) {
  console.log("for in: key: " + key + " value: " + obj[key]);
}
console.log("\n");//line break

//for each
numbers.forEach(function (item, index) {
  console.log("forEach: array item: " + item + " index: " + index);
});
console.log("\n");//line break

// while
copy = numbers.slice(0); //copy variable defined at the top
while (copy.length > 0) {
  console.log("while loop: pop array item: " + copy.pop());
}
console.log("\n");//line break

// do - while
copy = numbers.slice(0); //copy variable defined at the top
do {
  console.log("do while loop: pop array item: " + copy.pop());
} while (copy.length > 2)