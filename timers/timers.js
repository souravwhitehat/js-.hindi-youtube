const button = document.querySelector('#countDown')
const span =document.querySelector('.showCountDown')
let count = 11;

button.addEventListener('click',(e)=>{
const intervalId=setInterval(()=>{
    count--;
    console.log(`count: ${count}`);
    span.textContent=`${count}`
    if(count===0){
         clearInterval(intervalId)
          span.textContent='time over'
    }
    
    
},1000)

})


console.log('i am a console');



