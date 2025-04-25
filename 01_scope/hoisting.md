## Q1. Explain Hoisting in JavaScript

Lets understand it,

During the Creation Phase of the JavaScript Execution Context, JavaScript moves Variable / Functions to the top of the code in your program.

OR

Hoisting refers to the process of moving function declarations, variables, or classes to top of their scope / code before execution.

JavaScript interpreter will be responsible for moving these to the top of the program

Example - 1: using `var` :

```javascript
function test() {
  console.log(count);
  var count = 10;
}
test();
// Output: undefined since initialization takes places after console.log
```

`count` variable from above code will be moved to top of the code in the creation phase.
And assigned with `undefined` after executing.

Below snippet depicts the above mentioned scenario:

```javascript
var count;
console.log(count); // Output: undefined
count = 10;
```

Conclusion: `var` variables are hoisted

## Q2. Explain hoisting in the context of `let` variables

Example - 2: using `let` :

Lets understand hoisting in the context of variables that are declared with `let`;

```javascript
function test() {
  console.log(count);
  let count = 10;
}
test();
```

Here, in this example, it will throw the Reference Error saying Cannot Access `count` variable  before initialization;

This is advantageous over the variable declared with `var`. Because var variable are accessed before the initialization.

This scenario we refer as `Temporal Dead Zone`.

This means the the `let` variables are hoisted but in the `Temporal Dead Zone`.

### Temporal Dead Zone

Its the time between the `Declaration` and the ``Initialization` of `let` and `const` variables.

This mean variables are in the Scope but not yet declared.
