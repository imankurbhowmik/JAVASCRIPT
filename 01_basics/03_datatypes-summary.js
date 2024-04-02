// Datatypes are classified on the basis of how they are stored in memory and how they are accessed

// primitive and non primitive

// primitive
// string , number, bigInt, null , undefined, boolean, symbol
// they are called by value i.e. changes are made in the copied version 

// non primitive
// array , object , function
// they are called by reference

const Id = Symbol("1234")
const anotherId = Symbol("1234")
console.log(Id === anotherId);
// => false

const bigNumber = 122345678909875434567890765434666666666666666n
console.log(typeof bigNumber);

// declaring array
const arr = ["ankur" , "cricket" , "code"]
//array => []   , typeof == object

// declaring object
let myObject = {
    name : "ankur",
    year : "2nd"
}
//object => {}   , typeof == object

// declaring function
let myFunction = function(){
    console.log("HelloWorld");
}
//function =>   function(){}   , typeof == function


// ************************************* Memory ****************************************

// primitive datatypes are stored in the form of stack and non primitive datatypes are stored in the form of heap

// primitive datatypes => call by value (copy is made)
let myName = "Ankur"
let anotherName = "Bhowmik"

console.log(myName);
console.log(anotherName);

anotherName = myName;

console.log(anotherName);
console.log(myName);
// => myName doesnt change its value because a copy of myName is made to assign its value to anotherName

// non primitive datatypes => call by reference (access is made directly)
let userInfo = {
    userId : "45274",
    Upi : "ankur@google.com"
}
console.log(userInfo.userId);  //45274

let anotheruserInfo = userInfo
console.log(anotheruserInfo.userId);  //45274
console.log(userInfo.userId);    //45274

anotheruserInfo.userId = "34567";
console.log(anotheruserInfo.userId);  //34567
console.log(userInfo.userId);    //34567
// => value of  userinfo.userid also changes since direct reference is made while assigning the value of userinfo to anotheruserinfo