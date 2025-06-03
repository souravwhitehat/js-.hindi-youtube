console.log("arrays");

const myArr = [0,1,2,3,4,'Sourav',"hooo"];
console.log(myArr);
console.log(myArr[5]);

const newArr = new Array("hii",1 , 2)
console.log(newArr)
console.log(newArr[0])

// array methods
 myArr.push(6);
 myArr.push("i am a coder");//add values in an array...........
 myArr.pop();//removes the last value of an array....
 myArr.unshift(1000);//add value starting of an arry............
 myArr.shift();// removes the 1st value of an array...........

console.log(myArr.includes('Sourav'));//check the value is present or not and give the output in true false
console.log(myArr.indexOf("Sourav"))//show the value which index we will pass
console.log(myArr.indexOf("kumar"))//it gives -1 cause if we pass a value which is not present in array then it will give -1 index as output;
console.log(myArr);


const anotherArr = myArr.join()//joint convert the array to string
console.log(anotherArr);
console.log(typeof anotherArr);


//slice & splice

const myArr2 = new Array(1,2,3,4,5,6)
console.log("a " , myArr2);


const mya1 = myArr2.slice(1 , 3);//it goes from index no 1 to 2 not the last index which is 3
console.log(mya1);
console.log("b",myArr2);//it does not change the original array

const mya2 = myArr2.splice(1,3);//it goes index 1 to 3 .....
console.log(mya2);
console.log("c",myArr2);//it change the original array....it remove the index we pass in splice and display other values









