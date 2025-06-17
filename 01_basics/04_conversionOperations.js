//************************* Conversion *********************************


let score = "33"
let scoreUnreal = "33qab"

console.log(score);
console.log(typeof(score));  //string
console.log(scoreUnreal);    

//imp
let a = number //reference error
let b = string //reference error
// since they are not defined yet whereas the following work fine
let c = undefined

let convToNumber = Number(score)
console.log(typeof convToNumber);  //number

let secConvertor = Number(scoreUnreal)
console.log(typeof secConvertor);  //number
console.log(secConvertor);  // => NaN

// let us put score = null and then convert to number => typeof == number && value is 0
// let us put score = undefined and then convert to number => typeof == number && value is NaN
// let us put score = true and then convert to number => typeof == number && value is 1

let value = 1;
let booleanConv = Boolean(value)

console.log(booleanConv);

// 1 => true  0 => false
// "" => false  
// "Ankur" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);  //=> 33
console.log(typeof stringNumber); //=> string




// ********************************* Operations *************************************


let value2 = 3 ;
console.log(-value2); //=> -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

console.log(1 + 2);
// => 3
console.log(1 + "2");
// => 12
console.log("1" + 2);
// => 12
console.log("1" + 2 + "2");
// => 122
console.log("1" + "2" + 2);
// => 122
console.log(1 + 2 + "2");
// => 32

console.log(+true);
// => 1   true+ is error
console.log(+"");
// => 0