## Q1. Explain about JS Execution Context

Lets understand with an examples,

```javascript

    let a = 10;

    function add(x, y) {
        return x + y;
    }

    let b = add(a, 10);
```

When JS executes a Program, 

There will be two Phases created

1. Creation Phase
2. Execution Phase


1. Creation Phase:
    
    There will be 3 steps in  this phase
    1. Global / Window object creation
    2. Memory heap for variable / function reference storage inside the window / global object
    3. Initializes functions/variable declarations with `undefined`

2.  Execution Phase
    1. Executes the code line by line
    2. Assign the values to variables, make function calls


Note: For every new function calls, JavaScript Will Create an Execution Context;

## Q2. Explain about function call tracking process

JavaScript uses `Callstack` to keep track of the function calls