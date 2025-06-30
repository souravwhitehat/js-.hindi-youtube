console.log("NestedScope");


// function one (){
//     const userName = "sourav";
//     function two(){
//         const website = "Youtube";
//         console.log(userName)
//     }
//     // console.log(website);//we can't call this

//     two();

// }
// one()

if(true){
    const userName = "sourav";
    if(userName==="sourav"){
        const website = "youtube";
        // console.log(userName+website);
    }
   // console.log(website)//error
    
}
// console.log(userName)//error


// **********************interesting************************
console.log(addOne(5))//hoisting before declaration

 function addOne(num){
    return num+1;
 }

 console.log(addTwo(6));//Cannot access 'addTwo' before initialization
 
 const addTwo = function(num){
    return num+1;
 }