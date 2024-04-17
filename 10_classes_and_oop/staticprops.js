class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }


    static createId(){
        return `123`;
    }

}

const ankur = new user("Ankur")
console.log(ankur.createId());


class Teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}


const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
console.log(iphone.createId());