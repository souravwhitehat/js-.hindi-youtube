console.log('fetch');
fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>res.json() )
.then(data=>{
    console.log(data);
    
}).catch(err=>{
    console.log(`${err}: error`);
    
})


