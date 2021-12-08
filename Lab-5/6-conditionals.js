let numbers = [1];
let isEmpty = numbers.length <= 0 ? true : false;
// if-else
if (numbers.length > 0) {
  console.log('if: numbers array has elements');
} else if (numbers.length === 0) {
  console.log('if-else: numbers array is empty');
} else {
  console.log('else: This will never be excuted');
}
console.log("\n");//line break

if("1" == 1) {
  console.log("String 1 is equal to number 1 with ==.");
}

if("1" === 1) {
  console.log("String 1 is equal to number 1 with ===.");
} else {
  console.log("String 1 is not equal to number 1 with ===.");
}

// switch-case
switch (numbers.length) {
  case 1:
  case 5:
    console.log('Numbers array is not empty');
    break;
  default:
    console.log('case default: numbers array has elements');
    break;
}
