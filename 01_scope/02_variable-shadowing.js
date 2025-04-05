
// Variable Shadowing 

// using let , const variables
function variableShadowingDemo() {

    var personName = "Manish"
    var personAge = 25;
    if(true) {
        let personName = "Manish Boge"
        const personAge = 28;
        console.log(personName);
        console.log(personAge)
    }

    console.log(personName)
    console.log(personAge)    
}

variableShadowingDemo();


// Illegal Shadowing

// In the example below, the variable `personName` is declared twice in the same scope, which is illegal shadowing. The first declaration is with `let`, and the second declaration is with `var`. This will throw an error because `let` does not allow redeclaration in the same scope.
function illegalShadowingDemo() {
    let personName = "Manish"
     if(true) {
        var personName = "Manish Boge"
         console.log(personName);
     }

    console.log(personName)
 }
illegalShadowingDemo();
