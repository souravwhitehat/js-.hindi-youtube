console.log("arrow function");

const user = {
    userName : "sourav",
    password : "123@123",
    welcomeMsg  : function(){
        console.log(`${this.userName} , welcome to the website`)
        console.log(this);
        
    }
}
// user.welcomeMsg();//sourav  welcome to the website
// user.userName = "kumar"
// user.welcomeMsg();//kumar  welcome to the website

// console.log(this)//{} empty object.....


// **********************arrow function**********************

// const arrfun1 = ()=>{
//     let username = "sourav"
//     // console.log(this.userName)//undefined
//     console.log(this);{} //empty object
//     //we cant use this in arrow functionn
    
// }
// arrfun1()


// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(10 , 20))

// anotherway.....

const addTwo = (num1 , num2) => num1 + num2;
console.log(addTwo(50 ,20))


