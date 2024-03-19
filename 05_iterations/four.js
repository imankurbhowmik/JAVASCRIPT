//for in

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    java : "java"
}
for (const key in myObject) {
        console.log(key);
    }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    } 

const programming = ["java", "javascript", "c++" ,"python"]
for (const key in programming) {
    console.log(`index is ${key} and value is ${programming[key]}`);
}     


// maps are not iterable using for in