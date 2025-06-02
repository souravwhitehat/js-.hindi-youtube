console.log("Strings");

const name = "sourav";
let id =22;
console.log(name +id);//outdated syntax

//string interpolation

console.log(`hello my name is ${name} and my id is ${id}`);//modern syntax

//another way to declare a string
const anotherName= new String('sourav');
console.log(anotherName);

//in console the output is like this
// String {'sourav'}
// 0: "s"
// 1: "o"
// 2: "u"
// 3: "r"
// 4: "a"
// 5: "v"
// length: 6

// how to check a string is object or primitive
// use instanceof method

console.log(anotherName instanceof String);//true--> object
// For new String("sourav"), you’ll get "object" and true, which means it’s a String object.




console.log(name instanceof String);//false--> primitive


//metthods of String
console.log(anotherName.length)//6
console.log(anotherName.toUpperCase());//SOURAV
console.log(anotherName.charAt(2));//u
console.log(anotherName.indexOf('v'));//5

const newSting =anotherName.substring(0,3);//sou
console.log(newSting);

const nameThree = anotherName.slice(-6 , 2); //we can give negetive value to sclice ...................
console.log(nameThree);//so

const newStringOne = "   sourav    ";//removes all the white spaces
console.log(newStringOne.trim());//sourav

let url = "https://www.google.com/sourav biswal";
let newUrl=(url.replace(" " , "%20"));
console.log(newUrl);

console.log(url.includes('sourav'));//true

const friendsName = "Ananya Milan Rashmi Pabi";
console.log(friendsName.split(" "))//[ 'Ananya', 'Milan', 'Rashmi', 'Pabi' ]
//convert strings to array basis of separator.................



















// interview questions
// 🧠 Question: "Is string a primitive or object in JavaScript?"
// Answer: "String is a primitive data type in JavaScript. However, JavaScript automatically wraps it in a String object when methods are called."


