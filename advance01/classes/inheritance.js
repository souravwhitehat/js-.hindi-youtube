

class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class Teacher extends User{
     constructor(username,email,password){
         super(username)
        this.email=email
        this.password=password

    
    }
    addCourse(){
        console.log(`new cource added by ${this.username}`);
        
    }
}
const mathTeacher = new Teacher('ketu','ketu@gmail.com','123')
console.log(Teacher instanceof User);
mathTeacher.addCourse()
mathTeacher.logme()
console.log(mathTeacher);

