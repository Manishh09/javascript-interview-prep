// Q`. What is the difference between deep copy and shallow copy in JS?
// Shallow copy - creates a new object that references the same memory location as the original object
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.a = 10;
shallowCopy.b.c = 20;
console.log(original); // Output: { a: 1, b: { c: 20 } }
console.log(shallowCopy); // Output: { a: 10, b: { c: 20 } }

// Deep copy - creates a new object that is a complete copy of the original object, including nested objects  
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.a = 10;
deepCopy.b.c = 20;
console.log(original); // Output: { a: 1, b: { c: 20 } }
console.log(deepCopy); // Output: { a: 10, b: { c: 20 } }