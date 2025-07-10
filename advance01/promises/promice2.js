let result = false;
const promise = new Promise((resolve , reject)=>{
    if(result){
    resolve('food is ready');

    }
    else{
        reject('food is not ready');
    }
    

})
console.log(promise);
promise.then((result)=>{
    console.log(result);
    
}).catch((result)=>{
    console.log(result);
    
})
