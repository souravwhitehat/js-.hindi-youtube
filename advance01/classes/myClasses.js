console.log('hello');

// class User {
//     constructor(username,email,password) {
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return`${this.password}@123`
//     }
//     upperUsername(){
//        return `${this.username.toUpperCase()}`
//     }
// }
// const user = new User('sourav','kumar@123','sourav')
// console.log(user.encryptPassword());
// console.log(user.upperUsername());

//behind the scene
function user(username,email,password) {
     this.username=username
        this.email=email
        this.password=password
}
user.prototype.encryptPassword=function(){
        return`${this.password}@123`
}
user.prototype.upperUsername=function(){
  return `${this.username.toUpperCase()}`
}

const user2 = new user('kumar','biswal@123','abc')
console.log(user2.encryptPassword());
console.log(user2.upperUsername());
console.log(user2);



