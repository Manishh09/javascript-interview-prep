// Q1. What is the difference between call, apply and bind in JS?

// call() - method calls a function with a given `this` value and arguments provided individually
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: "Manish",
    lastName: "Boge"
};
// Using call() to call the fullName function with person1 as this value
const fullName = person.fullName.call(person1);

console.log(fullName); // Output: Manish Boge
// apply() - method calls a function with a given `this` value and arguments provided as an array
const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
};    

const person3 = { 
    firstName: "Manish",
    lastName: "Boge"
};

// Using apply() to call the fullName function with person3 as this value
const fullName2 = person2.fullName.apply(person3, ["Mumbai", "India"]); 
console.log(fullName2); // Output: Manish Boge, Mumbai, India

// bind() - method creates a new function that, when called, has its this keyword set to the provided value
const person4 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person5 = {
    firstName: "Manish",
    lastName: "Boge"
};

// Using bind() to create a new function with person5 as this value
const fullName3 = person4.fullName.bind(person5);
console.log(fullName3()); // Output: Manish Boge

// call() example

function greet() {
    console.log(`Hello, my name is ${this.name}.`);
}
let alice = {name: 'Alice'};
greet.call(alice);