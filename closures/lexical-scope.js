// Example to understand the lexical scope in javascript

var a = 10;

function test() {
    console.log(a); // a referred to be in lexical scope;
}

test();



// Example 2: Cannot access variables inside a function to the outside

function local() {
    var count = 10;  

    // local scope

    console.log(count); 

}

console.log(count);