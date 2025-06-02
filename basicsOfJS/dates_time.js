console.log('date and time');


const myDate = new Date()
// console.log(typeof myDate)//object 
// console.log(myDate instanceof Date)//true
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let createMyDate = new Date(2025,11,14);
// let createMyDate = new Date("2025-12-14");
let createMyDate = new Date("12-14-2025");

// console.log(createMyDate.toLocaleString());
// console.log(createMyDate.getTime());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(Math.round(Date.now()/1000))//convert MS to Sec.....


let newDate =  new Date()
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.getUTCDay())

// console.log(`today date is${myDate}`)

console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))


