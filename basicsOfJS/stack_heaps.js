console.log("Heap & Stack");

//stack(primitive)
//heap(non-primitive)


//stack 
// root value remain constant in stack it jus give a copy to another variable ...
let myYoutubeName = "code with sourav"
let anotherName = myYoutubeName;
anotherName="code"

console.log(myYoutubeName);

console.log(anotherName); 



//heap memory allocation
//in this root variable will change if we change ussing a reference variable...
let userOne ={
    email : "user@email.com",
    upi : "user@ybl"
}
let userTwo = userOne;
userTwo.email="sourav@gmail.com";
console.log(userOne);
console.log(userTwo);

