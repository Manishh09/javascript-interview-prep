// Q1. What is the difference between regular function and anonymous function in JS?

const user = {
    name: "Manish",
    regularFn: function greet() {
      console.log(this); 
      // `this` in regular function refers to the current object in which its referenced
      // `this` is not bound to the function itself, but to the object that calls it
      // In this case, `this` will refer to the user object
      // this is referred as Implicit Binding
       console.log(`Hey, ${this.name}`);
    },

    anonymousFn: () => {
      console.log(this); // `this` in anonymous function refers to the window object
      console.log('Hello..!',this.name); 
    }

  };
  
user.regularFn()
user.anonymousFn()

const regFunc = user.regularFn;
regFunc(); // `this` will refer to the global object (window in browsers) or undefined in strict mode
// Q2. What is the output from below code ?


function makeUser() {
    return {
      name: "Manish",
      ref: this,
    };
}
let user1 = makeUser();  // the parent object is window, window does not have name

console.log(user1.ref.name); // Output: undefined
// Explanation: In the makeUser function, `this` refers to the global object (window in browsers), not the user object.


// Q3. How to fix the above code ?
function makeUser() {
    return {
      name: "Manish",
      ref: function() {
        return this; // refers to its parent object 
      },
    };
}
let user2 = makeUser();
console.log(user2.ref().name); // Output: Manish
// Explanation: In this case, `this` refers to the `user` object because the ref function is called as a method of the user object.


// Q4. What is the output from below code ?
const person = {
    name: "Manish",
    age: 30,
    greet: function() {
        console.log(`Hello0000, ${this.name}`);
    }
};

setTimeout(person.greet, 1000); // Output: Hello, undefined
// Explanation: 
// In this case, `this` inside the greet function refers to the global object (window in browsers), not the person object.
// This is because setTimeout does not call the function as a method of the person object.
// In JavaScript, when a function is called as a method of an object, `this` refers to that object.

// When setTimeout calls the greet function, it does not call it as a method of the person object, so `this` is not bound to the person object.
// Instead, it refers to the global object (window in browsers), which does not have a name property.
// Therefore, the output is "Hello, undefined".


// To fix this, we can use `bind` to bind the correct context to the function:
setTimeout(person.greet.bind(person), 1000); // Output: Hello, Manish
// Explanation: By using `bind`, we create a new function that has the correct context (the person object) when it is called.

// Can use arrow function to preserve the context of `this`:
setTimeout(() => person.greet(), 1000); // Output: Hello, Manish
// Explanation: In this case, we use an arrow function to preserve the context of `this`, which refers to the person object.

// Can use regular function as well 
setTimeout(function(){
  person.greet()
}, 1000)


// Q5: this context changes when an  arrow function is inside a regular function

const obj = {
  name: "Manish",
  regular() {
    const arrow = () => {
      console.log(this.name); // this = obj (inherited from method)
    };
    arrow();
  }
};
obj.regular(); // "Manish"



// Q6: this context changes when an  arrow function is inside a regular function
const obj2 = {
  name: "Manish",
  regular() {
    function anotherRegular() {
      console.log(this.name); // this = window (global object)
    }
    inner();
  }
};
obj2.regular(); // undefined
// Explanation: 
// In this case, `this` inside the anotherRegular function refers to the global object (window in browsers), not the obj2 object.
// This is because anotherRegular is called as a regular function, not as a method of the obj2 object.
// In JavaScript, when a regular function is called without any context (not as a method of an object), its this value defaults to the global object (window in browsers, global in Node.js)



// Q7: this context changes when an  regular function is inside an arrow function

const obj3 = {
  name: "Manish",
  arrowFn: () => {
    function regularFn() {
      console.log(this.name);
    };
    regularFn();
  }
};
obj.arrowFn(); // undefined
// Explanation:
// In this case, `this` inside the regularFn function refers to the global object (window in browsers), not the obj3 object.
// This is because regularFn is called as a regular function, not as a method of the obj3 object.
// In JavaScript, when a regular function is called without any context (not as a method of an object), its this value defaults to the global object (window in browsers, global in Node.js)