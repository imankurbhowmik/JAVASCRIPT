// singleton is formed when we make objects using constructor and not otherwise

// using constructor
// Object.create
// const user = new Object{}

// using object literals
const mySym = Symbol("myKey")

const user = {
    name : "Ankur",   // key is assumed to be string so no need to put in quotes, values can be of any datatype
    [mySym] : "key1",
    age : 20,
    location : "agartala",
    lastLoginDays : ["Monday" , "Saturday"]
}

// to access an element of object
console.log(user.age);

console.log(user["location"]); // better way to access since we can't access using "." if key is written under qoutes

console.log(user[mySym]);

console.log(user);

// typeof mySym == Symbol
// typeof user[mySym] = string

const mySym2 = Symbol("key1")
const me ={
    [mySym2] : "myKey1"
}
console.log(me[mySym2]);  //myKey1
console.log(typeof me[mySym2]);  // string
console.log(me);  // { [Symbol(key1)]: 'myKey1' }

let student1 ={
    name : "Ankur",
    email : "abhk@googl.com",
    class : "2nd"
}

// freezing an object

student1.class = "3rd"
console.log(student1);
Object.freeze(student1.email)
student1.class ="4th"
console.log(student1);
Object.freeze(student1)
console.log(student1);

let myUser = {
    myName : "Ankur",
    myEmail : "dbjdbh.com",
    myAdress : "agt"
} 

myUser.greeting = function(){
    console.log("Hello bro");
}

myUser.greetingTwo = function() {
    console.log(`Hello ${this.myName} bhai`);
}
console.log(myUser.greeting);  // [Function (anonymous)]
console.log(myUser.greeting());  // Hello bro
console.log(myUser.greetingTwo()); // Hello Ankur bhai 