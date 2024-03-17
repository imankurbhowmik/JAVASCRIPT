const user = {
    username : "ankur",
    price : 999 ,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // "*"
    }
}
user.welcomeMessage();   // ankur , welcome to website
user.username = "harry"
user.welcomeMessage();  // harry , welcome to website

// "*" => {
//     username: 'harry',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// console.log(this);   returns {} whereas returns many properties when we write on browser console

function chai(){
    let username = "Ankur"
    // console.log(this);   // returns many properties
    // console.log(this.username);   // returns undefined
}
chai()
// same shit(undefined) happens even if we assign a name to the function


// arrow function   () => {}

const cup = () => {
    let username = "ankur"
    console.log(this);  // returns {}
    console.log(this.username);  // returns undefined
}
cup()

const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(2 , 3));

//implicit return
const subTwo = (num1 , num2) => (num1 - num2)
console.log(subTwo(5,3));

const add = (num1 , num2) => ({username : "ankur"})
console.log(add(3,4));  // returns the object as output
