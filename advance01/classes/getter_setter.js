class User {
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){
        // return this._password.toUpperCase()
        return `sourav${this._password}`
    }
    set password(value){
        if (value.length<6) {
            throw new Error("pass is too short")
        }
        this._password=value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email=val
    }
}
const sourav = new User("abc@gmail.com","@erfr")
console.log(sourav.password);
console.log(sourav.email);
