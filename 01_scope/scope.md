## Q1. Explain Scope with examples

### Scope 

- scope represents an area / region of a program , where a defined variable exists and can be recognized

Types:
- Global
- Functional
- Block

#### Global Scope
```javascript
var globalVar = "I am a global variable";

function checkGlobalScope() {
    console.log(globalVar); // Accessible here
}

checkGlobalScope();
console.log(globalVar); // Accessible here as well
```

#### Functional Scope
```javascript
function myFunction() {
    var functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessible here
}

myFunction();
console.log(functionVar); // Error: functionVar is not defined
```

#### Block Scope
```javascript
if (true) {
    let blockLet = "I am a block-scoped variable";
    const blockConst = "I am also a block-scoped variable";
    console.log(blockLet); // Accessible here
    console.log(blockConst); // Accessible here
}

console.log(blockLet); // Error: blockLet is not defined
console.log(blockConst); // Error: blockConst is not defined
```


## Q2. Explain Variable Shadowing 

ES6 allows variable shadowing

Lets understand with an example ;

```javascript
    function understandVariableShadowing() {
        
        let variableA = 'Hey';

        if(true) {


            let variableA = 'Hello!'; // overrides outSideIFVariable's value
            
            console.log(a); // Output: Hello
        }

        console.log(a); // Output: Hey

    }

```

Here, the variable, **variableA inside the if-block** shadows the variable named, **variableA which is outside the if-block**
Reason: insideIfVariable is block scoped

### Q2.1 Illegal Shadowing - A follow-up question

Yes , we should not allow illegal-shadowing

Lets understand with a demo,

```javascript

    // 1. cannot shadow var with let
    function illegalShadowing() {

        let variableA = 'Hi,';

        if(true) {

            var variableA = 'Hello';
            console.log(variableA); // Error: variableA has already been declared
        }
    }

    // 2. can shadow let with var
    function illegalShadowing() {

        var variableB = 'Hi,';

        if(true) {

            let variableB = 'Hello';
            console.log(variableB); // Output: Hello
        }
    }

```
**Summary:** Variable shadowing should not cross the boundary of the scope

## Q3. Explain about var, let and const Declaration 

### var
- can re-declare 
```javascript
    var a;
    var a;
```

### let
- re-declaration is not possible
```javascript
    let a;
    let a; // Error: a has already been declared
```

### const

- same as let, redeclaration is not allowed

```javascript
    const a; // Error: Missing initializer in const declaration
    const a; 
```
**Note 1:** const variable must be initialized once declared

**Note 2:** let, const variables cannot be re-declared in the same scope

Example:

```javascript
    let a; // scope: block

    {
        let a; // shadows the outer variable 
    };
```

## Q4. Can you re-initialize the var, let, and const variables, Explain with examples

Yes, In JavaScript,  variables declared with **var** and **let** will be re-initialized.

But **const** variable re-initialization is not allowed.

Examples;

### var

```javascript
    var a = 7;
    a = 8; // Absolutely allowed.
```
### let

```javascript
    let a = 7;
    a = 8; // Absolutely allowed.
```

### const

```javascript
    const a = 7;
    a = 8; // Error: Assignment to a const variable
```







