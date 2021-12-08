var a1 = 10;
var b1 = 10;
const p1 = Math.round(Math.PI * 100) / 100;

if (true) {
  var x1 = 20;
  let y1 = 20;
  var a1 = 20;
  let b1 = 20;
  const p11 = 30;
  // console.log(`Inside if block x1: ${x1} y1:${y1} p1: ${p1}`);
  // p1 = Math.PI; 
  //This statement will throw 'SyntaxError: Assignment to constant variable: p1' error.
}

var a2 = 10;
var b2 = 10;
const p2 = Math.round(Math.PI * 100) / 100;

function blockFn() {
  'use strict'
  var x2 = 20;
  let y2 = 20;
  var a2 = 20;
  let b2 = 20;
  const p2 = 100;
  //p2 = Math.PI; This statement will throw 'SyntaxError: Assignment to constant variable: p2' error.
};
blockFn();

`x1 = ${x1}, y1 = ${typeof y1}, a1 = ${a1}, b1 = ${b1}, p1 = ${p1}, p11 = ${typeof p11}, x2 = ${typeof x2}, y2 = ${typeof y2}, a2 = ${a2}, b2 = ${b2}, p2 = ${p2}`;
