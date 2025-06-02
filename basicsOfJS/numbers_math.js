// console.log("maths & Numbers")

const score = 400;
// console.log(score);//400

const balance = new Number(52000);
// console.log(balance);//[Number: 52000]

// console.log(typeof balance);//object

// console.log(balance instanceof Number);//true --->Object
// console.log(score instanceof Number);//false --->primitive

// console.log(score.toFixed(2));//400.00 if i pass 1 then output will be 400.0

const otherNumber = 23.250;
// console.log(otherNumber.toPrecision(3));//23.250---->23.3


const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000



// ******************************MATHS************************************

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.01));
// console.log(Math.floor(4.5));
// console.log(Math.sqrt(8));

// console.log((Math.random()*10) +1 );
const min = 1 ;
const max = 6;
console.log(Math.floor(Math.random()*(max - min +1)) +min)//method for round a random no in a range








