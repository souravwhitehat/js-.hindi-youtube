// console.log("Objects");
 
// //Two Way to create an object
// //literal & constructor


// //object literals
// const sym1 = Symbol("key1")
// const JsUser = {
//     sym1: "my keys", //wrong way to define a symbol
//     //in above sym1 is a string...

//     // [sym1] : "my keys..",//we define symbol as a key in an object in tis way..
//     //here [sym1] is a symbol


//     name : "sourav",
    
//     email: "sourav@gmail.com",
//     "full name" : "sourav kumar biswal",
//     id : 120,
//     workingDays : ['monday', 'tuesday','wednesday']
// };
// // console.table(JsUser)
// // 2 way to acces the objests values
// console.log(JsUser.name);//this method is not good for all time...
// console.log(JsUser.email);//this method is not good for all time...
// // console.log(JsUser.full name); this is not allowed.....

// console.log(JsUser["full name"]);//right way.......

// // how to define a symbol in an object
// // console.log(typeof (JsUser.sym1));//string .....not a symbol....
// console.log(typeof(JsUser[sym1]));//


//part 2 objects
//use constructor //singleton

const tinder = new Object();//singleton object
const tinderUser = {} //non singleton object

tinder.id = "12345";
tinder.name = "sourav"
tinder.age = 12;

// console.log(tinder);
// console.log(tinderUser);
const regularUser = {
    email : "abc@google.com",
    Name:{
        FirstName:"sourav",
        LastName : "biswal"
    }

}
// console.log(regularUser.Name)

const obj1 = { 1:"a ",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
// const obj3 = Object.assign({},obj1 , obj2);//assign use to mearge objects in a single obj...

const obj4={...obj1,...obj2}//speared operator....
console.log(obj4);

//acess arays of object ....

const myArr1 =[
    {
        id : "55",
        Name : "sourav"
    },
    {
        id : "55",
        Name : "hari"
    },
    {
        id : "55",
        Name : "ram"
    },
    {
        id : "55",
        Name : "krishna"
    },
]
console.log(myArr1[1].Name);

const tinderValues = Object.values(tinder);
console.log(tinderValues);//the out put means the datatype of the values are Arrays..
console.log(Object.keys(tinder));//returns the keys
console.log(Object.entries(tinder));//return both keys and values in a array


console.log(tinder.hasOwnProperty("name"));//check the value or keys is exist or not





 




