// Q1. What is the difference between a function and an arrow function in JS?
// Function - a block of code that can be called and executed
function greet() {
    console.log("Hello!");
}
greet(); // Output: Hello!

// Arrow function - a shorter syntax for writing functions, does not have its own this context
const arrowFn = () => {
    console.log("Hello!");
};
arrowFn(); // Output: Hello!


// Q2. What is the difference between regular function and anonymous function in JS?
// Regular function - has a name and can be called by that name

function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!

// Anonymous function - does not have a name and is often used as a callback or passed as an argument
const greetAnonymous = function() {
  console.log("Hello!");
};
greetAnonymous(); // Output: Hello!
// Anonymous functions are often used in functional programming, where functions are treated as first-class citizens and can be passed around as arguments or returned from other functions. They are also commonly used in event handling, where a function is defined inline to handle an event without needing to create a separate named function.

// Q3. What is the difference between function declaration and function expression in JS?

// Function Declaration - defined using the function keyword, can be called before its definition due to hoisting
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!
// Function declarations are hoisted, meaning they can be called before their definition in the code. This is because the JavaScript engine processes function declarations before executing the code.
// Function declarations are often used for defining reusable functions that can be called from multiple places in the code. They are also commonly used for defining methods in objects or classes, where the function is associated with a specific object or class instance.

// Function Expression - defined as part of an expression, cannot be called before its definition
const greetExpression = function() {
  console.log("Hello!");
};
greetExpression(); // Output: Hello!
// Function expressions can be anonymous or named, and they are not hoisted like function declarations. This means that if you try to call a function expression before its definition, you will get an error.  
// Function expressions are often used in functional programming, where functions are treated as first-class citizens and can be passed around as arguments or returned from other functions. They are also commonly used in event handling, where a function is defined inline to handle an event without needing to create a separate named function.


// Q4. What is the difference between function scope and block scope in JS?

// Function Scope - variables declared inside a function are only accessible within that function
function greet() {
  var name = "John"; // function scope
  console.log(name);
}
greet(); // Output: John
// console.log(name); // Error: name is not defined

// Block Scope - variables declared inside a block (e.g., if statement, loop) are only accessible within that block
if (true) {
  let name = "John"; // block scope
  console.log(name); // Output: John
}
// console.log(name); // Error: name is not defined
// Block scope is a feature introduced in ES6 with the let and const keywords. Variables declared with let and const are limited to the block in which they are defined, making them more predictable and reducing the risk of variable name collisions.

