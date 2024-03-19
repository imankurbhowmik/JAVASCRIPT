// for of

// ["", "", ""]
// [{}, {}, {}]

let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

// MAPS

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "INDIA")  // this won't get printed since maps take unique values and in order
console.log(map);

for (const key of map) {
    console.log(key);
}

// [ 'IN', 'INDIA' ]
//[ 'USA', 'United States of America' ]
//[ 'FR', 'France' ]

for (const [key,value] of map) {
    console.log(key ,":", value);
}

// IN : INDIA
// USA : United States of America
// FR : France

// objects are not iterable using for of