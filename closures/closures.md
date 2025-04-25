## Q1. Explain closures in JS

a closure gives a function access to its outer scope.

```javascript
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

Here, `displayName()` function has access to the scope of outer function `init()`,
thereby the function `displayName()` forms a `closure` in this scenario

## Scope Chain

Every closure has 3 Scopes:

1. Local or Own
2. Lexical or outer function's scope
3. Global

Lets understand with an example,

```javascript
// global scope
var firstName = "Manishh";
function test() {
  // outer function's scope
  var greet = "Hi";
  function print() {
    // local scope
    console.log(greet, firstName);
  }
}
```

### use-cases

1. Currying
It's the process of converting a function that takes multiple arguments into a sequence of functions that each take one argument at a time.

Example:

```javascript
var e = 7;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

sum(1)(2)(3)(4);
```
