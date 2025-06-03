console.log("array functions");

const myFriends = ["rashmi", "milan", "anu"];
const myOtherFriends = ["jaga" , "balia", "kabi"];

// myFriends.push(myOtherFriends);
// console.log(myFriends);

// console.log(myFriends[3][2]);


//concat
// const myAllFriends = myFriends.concat(myOtherFriends);//not a good practice
// console.log(myAllFriends);

// speard operator
const myAllFriends2 = [...myFriends, ...myOtherFriends]
console.log(myAllFriends2);
//advantage of this operator is we  can add two or more arrays ......

const longArr = [1,2,[2,4],4,[5,8,[5,8,7]],[1,55,44,[45,58]]]
const allLongArr = longArr.flat(Infinity);//wrap all the array in a single array
console.log(allLongArr);
console.log(allLongArr.length);

console.log(longArr);

//some important methods
console.log(Array.isArray("sourav"));//false
console.log(Array.from("sourav"));//from create an array like this----->[ 's', 'o', 'u', 'r', 'a', 'v' ]
console.log(Array.from({name : "sourav"}));//interesting....


let score1 =120;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));// of convert all indivisual elements into an array







