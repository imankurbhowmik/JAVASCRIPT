function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("R");
}
//sayMyName => reference
//sayMyName() => execute
sayMyName()

function addNum(num1, num2){     //num1 and num2 are parameters
    console.log(num1 + num2);
}
addNum(2 , 3)  // 2,3 are arguments  => == 5


function addNum(num1, num2){     //num1 and num2 are parameters
    console.log(num1 + num2);
}
const result = addNum(2 , 3)  // 2,3 are arguments  => == 5
console.log("Result" , result);  // => undefined

// better
function subTwoNum(num1 , num2){
    let result = num1 - num2
    return result    // * doesn't print result
}
subTwoNum(9 , 3)

console.log(subTwoNum(6,5));  // log prints the answer not return

//understanding better
function logInUser(username){
    return `${username} just logged in`
}
logInUser("Ankur")
// it will not print anything until we put console log before calling function
console.log(logInUser("Ankur"));
// if we don't pass any argument it will print undefined just logged in

function loggedUser(username = "Ank"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loggedUser("Ankur"));
// Ank just logged in will be printed in case argument is not passed


// rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200 , 300 , 2000));  //[200 , 300 , 2000]

function calculateSum(val1 , val2 , ... num1){
    return num1
}
console.log(calculateSum(200 , 400 , 500 , 2000));  // [500 , 2000]

const user = {
    username : "Ankur",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
// OR we could have passed the entire user object as argument 


const myNewArray = [200 , 300 , 400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// OR we could have put the array as argument