let d = 45
if (true) {
    let a = 10
    const b = 20
    var c = 30
    let d = 40
    console.log(d);
}
//  console.log(a); //this wont get printed
//  console.log(b); //this wont get printed
 console.log(c);  // this will get printed
 console.log(d);

 // outside => global scope  inside if => block scope

 function one(){
    const username = "Ankur"

    function two(){
        const website = "github"
        console.log(username);
    } 
    // console.log(website);  // this can't be done since it is outside the scope of function two

    two()
 }
 one()

 if(true){
    const username = "ankur"
    if(username === "ankur"){
        const website = " github"
        console.log(username + website);
    }
    // console.log(website); error
 }
//  console.log(username);  error

addOne(5)   // no error
function addOne(num){
    return num + 1
}

// addTwo(6)   error
const expression = function addTwo(num){
    return num + 2
}
// we cannot access a function before it is declared while using expression(holding in a variable) due to the problem in hoisting