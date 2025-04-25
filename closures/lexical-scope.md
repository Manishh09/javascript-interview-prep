## Lexical Scope

Lets understand with an example, 

```javascript
var count = 10; // global scope

function local() {

    // local scope

    console.log(count); 

}
```

Now, if you access the variable declared outside the function , `inside of` a function, 

then the variable is referred to be in Lexical Scope!


But the reverse is not valid, which means, variables declared inside of a function cannot be accessed outside 

Example:
```javascript

function local() {
    var count = 10;  

    // local scope

    console.log(count); 

}

console.log(count); // Invalid
```