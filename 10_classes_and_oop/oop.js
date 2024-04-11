// const user = {
//     username : "Ankur",
//     loginCount : 9,
//     isSignedIn : true,

//     getUserDetails : function(){
//         // console.log(`username : ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user["loginCount"]);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this;
}


const userOne = new User("Ankur", 12, true);
console.log(userOne);
