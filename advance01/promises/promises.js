// const promise1= new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('task is complete')
//         resolve()
//     },1000)
// })
// promise1.then(function(){
//     console.log('get promise')
// })

// //another way to create promise
// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log('task 2 is complete')
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log('call promise 2')
// })


// //3rd promise

//  new Promise(function(resolve , reject){
//     setTimeout(function() {
//         resolve({username:'sourav',Email:'biswalsourav98@gmail.com'})
//     }, 1000);
// }).then(function(user){
//     console.log(user);

// })



// acess value using then()chaning
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {

        let error = false;

        if (!error) {
            resolve({ username: 'sourav', password: "123" })
        }
        else {
            reject('something went wrong')

        }
    })
}, 1000);

promise4
    .then((user) => {
        console.log(user)
        return user.username

    })

    .then((username) => {
        console.log(username);

    })
    .catch((error) => {
        console.log(error);

    }).finally(() => console.log
        ('the promice is either resolved or rejected'))

async function getMyDetails() {
    try {
   
  const response = await fetch('https://api.github.com/users/souravwhitehat');
    console.log(response);
    const data = await response.json()
    console.log(data);
    console.log((data.followers))
    }catch (error) {
    console.log('error');

    
}
}
getMyDetails()







