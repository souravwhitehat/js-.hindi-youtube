const clock = document.getElementById('clock');



setInterval(()=>{
  let date = new Date();
clock.innerHTML=date.toLocaleTimeString()
  // console.log(date)
},1000)
