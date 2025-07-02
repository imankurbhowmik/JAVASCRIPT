// console.log(2 > 2);
// console.log(2 == 2);
// console.log(6 <= 4);

console.log("2" > 2);  
// => FALSE
console.log("2" >= 2);
// => TRUE
console.log("2" == 2);
// => TRUE
console.log("02" > 2);
// => FALSE
console.log("02" >= 2);
// => TRUE
console.log("02" == 2);
// => TRUE

console.log(null > 0);
// => data conversion happens [F]
console.log(null == 0);
// => data conversion doesnt happen [F]
console.log(null >= 0);
// => data conversion happens [T]
// data conversion happens in case of inequality operator

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// imp point
// == is abstract equality only gives true for null == undefined 
// inequality operators involves type conversion to number so gives ans accordingly 

console.log("20abc" > 2);
// => False  
console.log("20" > 2);
// => True

// === checks both datatype and number
console.log("2" === 2);
// => False