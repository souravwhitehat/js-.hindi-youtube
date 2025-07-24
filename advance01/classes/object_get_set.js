// const User={
//     name:"acb@gmail.com",
//     password:"abc@123",

//     get email(){
//         return this._email.toUpperCase()
//     }
//     ,
//     set email(value){
//         this._email=value
//     }
// }
// const person = Object.create(User)
// console.log(person.email);

const User2 ={
    FirstName:"sourav",
    lastName:"kumar",
    get fullname (){
        return `${this.FirstName} ${this.lastName}`
    }
}
const user3 = Object.create(User2)
console.log(user3.fullname);

// console.log(User2.fullname);
