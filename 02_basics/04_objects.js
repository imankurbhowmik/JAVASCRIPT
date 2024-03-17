const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

let theUser = {
    name : {
        firstName : {
            first : "Ankur",
            middle : ""
        },
        lastName : "Bhowmik"
    }
}
console.log(theUser.name.firstName.first);  // access

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({} , obj1, obj2 , obj3) //merge
console.log(obj4); 

const obj5 = {...obj1, ...obj2, ...obj3}  // merge
console.log(obj5);


console.log(Object.keys(obj1));  // returns all the keys in the form of array
console.log(Object.values(obj2));  // returns all the values in the form of array
console.log(Object.entries(obj3));  // returns all entries in the form of array, useful while working with databases
console.log(obj3.hasOwnProperty("1")); //false


// destructuring objects

const course = {
    name : "webD",
    price : "0",
    courseInstructor : "mein"
}
// one way to access courseinstructor
console.log(course.courseInstructor);

// destructuring way
const{courseInstructor} = course
console.log(courseInstructor);
const{courseInstructor : instructor} = course
console.log(instructor);

{

} //JSON