console.log("Objects");
 
//Two Way to create an object
//literal & constructor


//object literals
const sym1 = Symbol("key1")
const JsUser = {
    sym1: "my keys", //wrong way to define a symbol
    //in above sym1 is a string...

    // [sym1] : "my keys..",//we define symbol as a key in an object in tis way..
    //here [sym1] is a symbol


    name : "sourav",
    
    email: "sourav@gmail.com",
    "full name" : "sourav kumar biswal",
    id : 120,
    workingDays : ['monday', 'tuesday','wednesday']
};
// console.table(JsUser)
// 2 way to acces the objests values
console.log(JsUser.name);//this method is not good for all time...
console.log(JsUser.email);//this method is not good for all time...
// console.log(JsUser.full name); this is not allowed.....

console.log(JsUser["full name"]);//right way.......

// how to define a symbol in an object
// console.log(typeof (JsUser.sym1));//string .....not a symbol....
console.log(typeof(JsUser[sym1]));//

 




