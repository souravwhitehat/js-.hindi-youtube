// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

const student = {
    name:'sourav',
    roll:20
}
const obj = Object.getOwnPropertyDescriptor(student,'name')
console.log(obj);

const chai ={
    name:"ginger  chai",
    price:250,
    isAvailable:true,

    order: function(){
        console.log("ready");
        
    }
}
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
// console.log(chai);
// const prop = Object.getOwnPropertyDescriptor(chai,'name')
// console.log(prop);


for (const [key,vlaue] of Object.entries(chai)) {
    if (typeof vlaue!=='function') {
        console.log(`${key} :  ${vlaue}`);  //price and isAvailable
    }
}
