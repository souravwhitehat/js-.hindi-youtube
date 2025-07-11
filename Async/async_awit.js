// async function getData() {
//     try {
//         const myData = await fetch("https://api.github.com/users/souravwhitehat")
//         const data = await myData.json()
//         console.log(data.login);
        
//     } catch (error) {
//         console.log("unexpected error");
        
//     }
    
// }
// getData()

// async function printValue() {
//     return "hii i am a promise"
// }
// printValue().then((see)=>{
//     console.log(see);
    
// })
// async function fetchValue() {
//     const mydata = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await mydata.json()
//     // console.log(data.name);
//     return data;
    
// }
// fetchValue().then((name)=>{
//     console.log(name.username);
    
// }).catch((err)=>{
// console.log("404 not found");

// })

// const button = document.querySelector('#btn')
// const result = document.querySelector('#result')
// button.addEventListener('click',()=>{
//     async function getAllUserData() {   
//         try {
//             const userdata = await fetch("https://jsonplaceholder.typicode.com/users/4");
//             const data = await userdata.json()
//             console.log(data);
            
//             result.textContent=data.username
//         } catch (error) {
//             result.textContent="No result found"
//         }
        
//     }
//     getAllUserData()
// })

const userId= document.getElementById('userid')
const find= document.getElementById('find')
const result= document.getElementById('result')

find.addEventListener('click',(e)=>{
    async function getUserDetails() {
        e.preventDefault();
        try {
            let id = userId.value
            console.log(id) 
                let userData =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                 if (!userData.ok) throw new Error("404 error");
                const data =await userData.json();
                result.textContent=data.username;
                result.style.color='green'
                userId.value=''
    
        } catch (error) {
             result.textContent="user not found";
                result.style.color='red'
        }

    }
    getUserDetails()
})
