// let myName = "Ankur   ";
// let myChannel = "Chai   ";

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ankur = function(){
    console.log(`ankur is present in all objects`);
}


Array.prototype.heyAnkur = function(){
    console.log(`Ankur says hello`);
}

heroPower.ankur();

myHeros.ankur();

//heroPower.heyAnkur();

myHeros.heyAnkur();


// inheritance

const User = {
    name :"chai",
    email: "chai@google.com"
}


const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User



//modern Syntax

// Object.setPrototypeOf(User, teacher);


let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUsername.trueLength();

"ankur".trueLength();