## Q1. Explain Hoisting in JavaScript

Lets understand it, 

During the Creation Phase of the JavaScript Execution Context,  JavaScript moves Variable / Functions to the top of the code in your program.

Example - 1: using `var` :

```javascript
    console.log(count);
    var count = 10;
```
`count` variable from above code will be moved to top of the code in the execution phase.
And assigned with `undefined`.

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
    console.log(count);
    let count = 10;
```
Here, in this example, it will throw the Reference Error saying Cannot Access count before initialization;

This is advantageous over the variable declared with `var`. Because var variable are accessed before the initialization.

This scenario we refer as `Temporal Dead Zone`.

This means the the `let` variables are hoisted but in the `Temporal Dead Zone`.


### Temporal Dead Zone

Its the time between the `Declaration` and the ``Initialization` of `let` and  `const` variables.

This mean variables are in the Scope but not yet declared.



