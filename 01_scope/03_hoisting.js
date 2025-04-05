// Hoisting example

function test() {

    console.log(a, b, c);

    let a = 1;
    const b = 2;
    var c = 3;
}
console.log(test()); // Ref Error due to let, const variables hoisting nature