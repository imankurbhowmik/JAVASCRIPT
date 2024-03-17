const name1 = "hitesh"
const repoCount = 50
console.log(name1 + repoCount + " Value");

const name2 = "ankur"
const age = 20
console.log(`my name is ${name2} and my age is ${age}`);

const clg = String("NITA")
console.log(clg);

const address = new String("Dhaleswar")
// => now it is an object and stored with index

console.log(address);
console.log(address[2]);
console.log(address.length);
console.log(address.__proto__);
console.log(address.toUpperCase())
console.log(address.charAt(8));
console.log(address.indexOf("a"));
console.log(address.substring(1,4));
// negative index is not allowed
console.log(address.slice(1,4));
console.log(address.slice(1,-4));
// => hale
console.log(address.slice(-4,8));
// => swa

const company = "           apple              "
console.log(company);
console.log(company.trim());

const url = "https://ankurbhowmik.com"
console.log(url.replace('ankur', 'hello'));   //=> https://hellobhowmik.com
console.log(url.includes("ankur"));
console.log(url.includes("hello"));

// converting string to array based on characters
const mail = "bhowmik-ankur-567@gmail.com"
console.log(mail.split('-'));
// =>  ['bhowmik', 'ankur' , '567@gmail.com']