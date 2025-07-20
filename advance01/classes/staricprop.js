class User {
    constructor(username){
        this.username=username
}
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
   static createId(){
        return `123`
    }
}
const sourav = new User('sourav') 
console.log(sourav.createId());
