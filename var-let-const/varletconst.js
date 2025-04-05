// Q1. What is the difference between let, var and const in JS?

// var - function scoped or globally scoped
var x = 10; // global scope
function testVar() {
    var x = 20; // function scope
    console.log(x); // Output: 20
}
testVar();
console.log(x); // Output: 10


// let - block scoped, can be reassigned
let y = 10; // global scope
function testLet() {
    let y = 20; // block scope
    console.log(y); // Output: 20
}
testLet();
console.log(y); // Output: 10


// const - block scoped and cannot be reassigned
const z = 10; // global scope
function testConst() {
    const z = 20; // block scope
    console.log(z); // Output: 20
}
testConst();
console.log(z); // Output: 10

