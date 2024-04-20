// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);


const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log("Chai ordered");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable : true,
    enumerable : false
})

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let key in chai) {
    if(typeof chai[key] !== 'function'){
        console.log(`${key} : ${chai[key]}`);
    }
}