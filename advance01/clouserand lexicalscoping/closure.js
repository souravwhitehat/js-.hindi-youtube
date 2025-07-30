
//lexical scoping

// function outer() {
//     let name = "sourav"
//     function inner(){
//         console.log(name);  
//     }
//     inner()
// }
// outer()

// closure

function myfuncOne(){
    let name = "sourav"
    return function myfuncTwo(){
        console.log(name);
        
    }

}
// console.log(myfuncOne())//this is wrong way 
const newfunc = myfuncOne()
newfunc()

// realworld example

// document.getElementById('orange').onclick=function(){
//     document.body.style.backgroundColor=`orange`
// }
// document.getElementById('green').onclick=function(){
//     document.body.style.backgroundColor=`green`
// }
// note:== if we have 500 of buttons then ! ... in this case we use closure

// function buttonHandler(color) {
//     return function(){

//         document.body.style.backgroundColor=`${color}`
//     }

// }
// document.getElementById('green').onclick=buttonHandler("green")
// document.getElementById('orange').onclick=buttonHandler("orange")


// simple counter
// function  main() {
//     let count=0
//     return function counter(){
//         count++
//         console.log(count)
//     }

// }
// const fn = main()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()

//anoter counter app
// function outer(count){
//     console.log("outer function");
//     return function inner(){
//         count++
//         console.log(count);
        
//     }
    
// }
// const startwith10=outer(10)
// startwith10()
// startwith10()
// startwith10()
