const userMail = "sdfdsf";

if(userMail){
    console.log("got user mail");
    
}
else{
    console.log("don't get user email");
    
}
//falsy values
// false , 0,-0 , BigInt , "" ,null , undefined , NaN.

// Truthy value
// "0" , "false" , [] , " " , {} , function(){}

// how to check an empty array
const myArr = [];
if(myArr.length===0){
    console.log("array is empty");
    
}
// how to check an object is empty
const myObj ={
    name : "sourav"
}
if(Object.keys(myObj).length===0){
    console.log("object is empty");
    
}
else {
    console.log("object have content...");
    
}
// console.log(Object.keys(myObj).length)//synstax for check length of an object


// nullish coalilescing operator (??):null&Undefined
let val1;
// val1 = 10 ?? 20;
// val1=null??30;
val1 = undefined ?? 50;
// val1 = 0 ?? 30;//0
console.log(val1);



// Ternary operator ?

// condition ? true : false;

const price = 70;
price <= 80 ? console.log("less than 80") : console.log("greater than 80");
;



