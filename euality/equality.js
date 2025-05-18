// Q1. What is the difference between == and === in JS?
// == - compares values for equality, performing type coercion if necessary
console.log(5 == "5"); // Output: true
// === - compares values for equality without performing type coercion
console.log(5 === "5"); // Output: false
// Q7. What is the difference between null and undefined in JS?
// null - represents the intentional absence of any object value
let a = null;
console.log(a); // Output: null
// undefined - represents a variable that has been declared but has not yet been assigned a value
let b;
console.log(b); // Output: undefined