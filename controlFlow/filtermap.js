console.log("foreach")

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((nums) => {
//    return nums>5
// });
// console.log(newNums);

// same thing using foreach loop

newNums = [];
myNums.forEach((num)=>{
    if(num>5){
        newNums.push(num)
    }  
})
console.log(newNums);
    
