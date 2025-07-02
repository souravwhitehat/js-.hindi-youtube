//for of loop

const myArr = [1,23,4,5,65,6];
for (const element of myArr) {
    // console.log(`all elements are ${element}`);
    
}

const greatings = "hello world!"
for (const great of greatings) {
    if (great===" ") {
        continue
    }
    // console.log(`all char are ${great}`)
}

//Maps.........
const map = new Map()
map.set('IN', "India")
map.set('USA', "United Stare Of America")
map.set('Fr', "France")
// console.log(map);

// get elements from map using for of loop

// for (const key of map) {
//     // console.log(key);
    
// }//if we write like this then we get all values in an array

//right way to write code for map using forof loop..
for (const [key , value] of map) {
    console.log(`${key}  :-> ${value}`);
    
}//if we use this the we get only our values not in an array form.........



// forin loop

// forin in object
const myobj = {
    js: "javascript",
    cpp:"c++",
    rb: "ruby"
}
for (const key in myobj) {
//   console.log(`${key} shortcut is ${myobj[key]}`);
  
}


// forin in Array
const programming = ["java", "js", "ruby"]
for (const key in programming) {
//    console.log(programming[key]);
   
}


// foreach loop in array...
const coding = ["html", 'css', "java", "c++"]
coding.forEach((val)=>{
    // console.log(val);
    
})


// foreach use in object inside an array
const myCoding =[
    {
        myLanguage : "javascript",
        myFilename: "js"
    },
    {
        myLanguage : "java",
        myFilename: "java"
    },
    {
        myLanguage : "c++",
        myFilename: "cpp"
    },
]
myCoding.forEach((items)=>{
    console.log(items.myFilename);
    
})