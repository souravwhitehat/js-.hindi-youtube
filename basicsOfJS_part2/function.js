console.log("function")

function myFunc(){
    console.log("i'm a function")
}
// myFunc()//reference............

function newFunc(num1 , num2){//parameters............
    console.log(num1+num2)
}
// const result = newFunc(1,'2')// arguments...........
// console.log(result)//undefined

function addTwoNumbers(num1 ,num2){
    // const result = num1+num2
    // return result;
    return num1 +num2
}
// console.log(addTwoNumbers(1,15));

function logInUserMessage (username){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged In`

}
console.log(logInUserMessage("sourav")