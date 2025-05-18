// Q1. What is the difference between forEach and map in JS?

// forEach - executes a provided function once for each array element, does not return a new array
const numbers = [1, 2, 3];
numbers.forEach((num) => {
    console.log(num); // Output: 1, 2, 3
});

// map - creates a new array populated with the results of calling a provided function on every element in the calling array
const numbers2 = [1, 2, 3];
const doubled = numbers2.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]