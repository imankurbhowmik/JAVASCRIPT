// *************************** Number ***********************************

const num = 100
console.log(num);
console.log(typeof num);  //number

const balance = new Number(200);
console.log(balance);
console.log(typeof balance);  //object

console.log(balance.toString());   // to string
console.log(balance.toFixed(1));  // converts to a number with 1 decimal place
console.log(balance.toPrecision(4));  //converts to a number with total 4 digits also rounded

const hundreds = 100000000000;
console.log(hundreds.toLocaleString());  //puts comma for user interpretation
console.log(hundreds.toLocaleString('en-IN'));  //in indian system

// ******************************* Math ***********************************

console.log(Math);
console.log(Math.abs(-4));     //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.3));   //5
console.log(Math.floor(4.6));  //4
console.log(Math.max(4, 5, 6, 9));  //9
console.log(Math.min(2, 3, 1, 9));  //1

console.log(Math.random());   // returns a value between 0 and 1
console.log(Math.random() * 10);
// to avoid number being 0 (if random gives 0.04....)
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor((Math.random()) * (max - min + 1))+ min);