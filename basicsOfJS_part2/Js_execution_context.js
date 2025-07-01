// JS execution context
// {}  ==>  Global execution context

// 1==> Global Execution Context
// 2==> Function Execution Context
// 3==> Eval Execution Context

// {}-> memory creation phase
// --->execution phase

// example..............

let var1 = 10;
let var2 = 20;

const addTwo = (num1 ,  num2)=>{
    let total = num1 +num2;
    return total;
}
let result1 = addTwo(var1 , var2)
let result2 = addTwo(2 ,3)
console.log(result1)
console.log(result2)



// example of multiple function how to execute in js execution context
function one (){
    console.log("one")
    two()
}
function two (){
    console.log("two")
    three()
}
function three (){
    console.log("three")
}
one()
two()
three()