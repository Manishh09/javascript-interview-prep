// Examples for closures
function init() {
  var name = "Manish"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


// Example 2:

function A() {
  let num = 4;
  function B(){
    console.log(num);
  }
  num = 5;
  return B();
}

A();

// Explanation:
// In the above example, the function B() forms a closure with the variable num.
// When A() is called, it initializes num to 4, then changes it to 5.
// When B() is called, it still has access to the variable num, which is now 5.
// This is because closures retain access to their lexical scope, even after the outer function has finished executing.

// This demonstrates how closures in JavaScript capture variables by reference, not by value.
//  Even though num was 4 when B() was defined, it accesses the current value of num when it executes.


// Q: Create private counter using closures
function createCounter() {
  let count = 0; // This variable is "remembered"

  // return function () {
  //   return ++count;
  // };

  return () => {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// What is the difference between a closure and a callback in JS?
// Closure - a function that retains access to its lexical scope, even when the function is executed outside that scope
function outerFunction() {
  let count = 0;
  return function innerFunction() {
      count++;
      console.log(count);
  };
}
const count = outerFunction();
count(); // Output: 1
count(); // Output: 2
count(); // Output: 3
count(); // Output: 4


// Callback - a function passed as an argument to another function, executed after the completion of the first function
function fetchData(callback) {
  setTimeout(() => {
      callback("Data fetched");
  }, 2000);
}
fetchData((data) => {
  console.log(data); // Output: Data fetched (after 2 seconds delay)
});