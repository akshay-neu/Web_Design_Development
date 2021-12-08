
let num = 1.23;
let numObject = new Number(1.23);
let str = 'I am a string';
let strObject = new String("I am a string");
let flag = true;
let nullObject = null; //  null is a value, it is an empty value
let undefiedVariable = undefined;
let unassigned; // undefined - no value
let arr = [1, 2, 3, true, 'str'];
let obj = { // js object, key-value pair
  str: 'value1',
  num: 1,
  add: function(x, y) { return x + y; },
  str: 'value2',
  1: 100
};
let templateStr = `${str} ${num}`; 
// templateStr = str + ' ' + num;

//Primitive
console.log(`typeof num: ${typeof num}`);
console.log("typeof numObject: " + typeof numObject);
console.log("typeof str: " + typeof str);
console.log("typeof strObject: " + typeof strObject);
console.log("typeof flag: " + typeof flag);
console.log("typeof nullObject: " + typeof nullObject);
console.log("typeof undefiedVariable: " + typeof undefiedVariable);
console.log("typeof unassigned: " + typeof unassigned);
console.log("typeof notdeclared: " + typeof notdeclared);
console.log("\n");

//Array
console.log("typeof arr: " + typeof arr);
console.log("access arr by arr[index]: " + arr[0]);
console.log("access arr unshift: " + arr.unshift(0)); //adds to first
console.log("access arr push: " + arr.push("str 2")); //adds to last
console.log("access arr shift: " + arr.shift()); //removes first
console.log("access arr pop: " + arr.pop()); //removes last
console.log("\n");

//Object
console.log("typeof obj: " + typeof obj);

let key = 'str';
console.log("access obj by obj[key]: " + obj[key]);
console.log("access obj by obj[keyNotExists]: " + obj['num2']);
console.log("access obj by obj.key: " + obj.num);
console.log("access obj by obj.key: " + obj.num2);


console.log('Template String: ' + templateStr);

//null & undefined
let undefined1 = undefined;
let null2 = null;

if(undefined1 === null2) {
  console.log(true);
} else {
  console.log(false);
}