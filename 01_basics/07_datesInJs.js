const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString('EN-In'));

let myCreatedDate = new Date(2023, 1, 28, 9, 15, 34)
console.log(myCreatedDate.toLocaleString('EN-IN'));

let myTimeStamp = Date.now()

console.log(myTimeStamp);    //milliseconds
console.log(myCreatedDate.getTime());   //milliseconds
console.log(Math.floor(Date.now()/1000));

let proDate = new Date();
console.log(proDate.toLocaleString('default',{
    weekday: "long"
}));