function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, "password", {
        get : function(){
            return `${this._password}123`;
        },
        set : function(value){
            this._password = value;
        }
    })

}

const ankur = new User("ankur@ai.com", "abc");

console.log(ankur.email);
console.log(ankur.password);