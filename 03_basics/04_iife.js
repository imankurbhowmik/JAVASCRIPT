(function chai(){  // named IIFE
    console.log("DB connected");
})();  

// SYNTAX ()()   used to prevent function from pollution of global scope

( () => {
    console.log("DB two connected");
})();

((name) => {
    console.log(`My name is ${name}`);
}) ('Ankur')