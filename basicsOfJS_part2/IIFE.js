//Immedietly Invoked Function Expression(IIFE)
//why IIFE?
// We use IIFE (Immediately Invoked Function Expression) in JavaScript for data privacy, avoiding global scope pollution, and for executing code immediately without calling the function separately.

// example

(function name (){
    //named IIFE..........
    const username = "sourav"
    console.log(username);
    
})();//semicolon is mandatory in IIFE


// IIFE in arrow function
( ()=>{
    //unnamed IIFE
    console.log(`hii DB connected 404 error........`)
} )();

//use parameter...........
( (name)=>{
    //unnamed IIFE
    console.log(`hii DB connected 404 error........${name}`)
} )("sourav");

