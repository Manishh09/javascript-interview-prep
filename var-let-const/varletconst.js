// Q1. What is the difference between let, var and const in JS?

// var - function scoped or globally scoped
var x = 10; // global scope
function testVar() {
    var x = 20; // function scope
    console.log(x); // Output: 20
}
testVar();
console.log(x); // Output: 10

// example of hoisting with var
function varTest() {
    var x = 10; // function scope
    {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}
varTest();

// Reason: Var variable maintains the same instance if variable name is same.


// Example 3:
var rate = 10;
function getRate() {
    if(rate === undefined){
        var rate = 20;
        return rate;
    }
    return 30;
}

getRate(); // 20; (due to `var` variable hoisting, function declaration hoisting)

// let - block scoped, can be reassigned
let y = 10; // global scope
function testLet() {
    let y = 20; // block scope
    console.log(y); // Output: 20
}
testLet();
console.log(y); // Output: 10

// Example 2

function letTest() {
    let x = 1;
    {
        let x = 2; // Block Scoped
        console.log(x); // 1
    }
    console.log(x); // 1
}



// const - block scoped and cannot be reassigned
const z = 10; // global scope
function testConst() {
    const z = 20; // block scope
    console.log(z); // Output: 20
}
testConst();
console.log(z); // Output: 10

