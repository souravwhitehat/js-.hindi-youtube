"use strict";

let num = undefined;
let valueInNumber = Number(num);
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "33"= 33
// True = 1
// false = 0
// Null = 0;
// undefined = nan;

let booleanInNumber = "hii";

// let numberInBoolean = Boolean(booleanInNumber);
// console.log(numberInBoolean)

// 1=true
//0 = false
//""= false
//"hii" = true

let numTostring = 12;
let stringToNumber = (String(numTostring));
console.log(stringToNumber);
console.log(typeof stringToNumber);


// ***********************************************operations**************************************************************************

let value = 3;
let negvalue = -value;
console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2%2)
// console.log(2/2)



//string Concardinations
let str1 = "hii";
let str2 = " sourav";
let str3= str1 + str2;

// console.log(str3);

// console.log("2"+2);
// console.log("2"+2+2);
// console.log(2+2+"2");
// console.log(2+"2"+(2+2));//number+ string = string.....


// ********************tricky conversions*************
// console.log(true)//true
// console.log(+true);//1
// console.log(+"");//0


let num1 , num2 , num3;
num1 = num2 = num3 = 2+2;
console.log(num1 , num2 , num3);


let num4 = 100;
num4++;
console.log(num4);
//link to study .........
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


// ****************DataTypes******************
//Primitive

// 7types : String , Number , Boolean, null , Undefined , Bigint , Symbol.........

const score =100;
let getBoolean = true;
let id = Symbol("hooo")
let anotherId = Symbol("hooo")
console.log(id == anotherId);


// JS is dynamically typed cause you don’t need to declare the type of a variable.

//Reference Type or Non primitive
// Array , Object , Function
// Array
const fruits =["apple", "banana", "orange"];
console.log(typeof fruits)
// Object
let myObj = {
    name : "sourav",
    class  : "MCA",
    age : 20
}
// console.table(myObj)
console.log(myObj);

// Function
const myFunc = function(){
    console.log("hii")
}
myFunc();







