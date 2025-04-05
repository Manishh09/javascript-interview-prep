// var vs let vs const

// var - global scope

var a = 5;
console.log(5);


// block scope

{
    var b = 6;
}

console.log(b); // output: 6 becoz of global scope

// let
{
    let c = 7;
}
console.log(c); // throws error becoz of block scope

// const

{
    const d = 8;
}
console.log(d); // throws error bcause of block scope


// variable defined with var inside a block can be accessed outside the block

if(true) {
    var blockScopeVar = 'block scoped var';
}
console.log(blockScopeVar); // output: block scoped var

