// let username = "admin"
// let password = "admin@123"
// if(username==="admin"&&password==='admin@123'){
//     console.log("login successfull");

// }else{
//     console.log("Invalid credentials");

// }

let username = document.getElementById('username')
let password = document.getElementById('password')
const button = document.getElementById('btn')
const result = document.getElementById('result')

button.addEventListener('click', (e) => {
    e.preventDefault()
    let userval = username.value.trim()
    let passval = password.value.trim()

    console.log(userval);
    console.log(passval);


    result.textContent = 'loading....'
    result.style.color='black'
    setTimeout(() => {
        if (userval === 'admin' && passval === 'admin@123') {
            result.textContent = 'login succesfull'
            result.style.color = 'green'

        }
        else {
            result.textContent = 'Invalid credentials'
            result.style.color = 'red'
        }
    }, 2000)
    username.value=""
    password.value=""

})


const total = document.getElementById('total')
const calbtn = document.getElementById('calbtn')
const show = document.getElementById('show')

calbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    show.textContent="checking...."
    show.style.color='black'
    let carttotal=parseInt(total.value)
    setTimeout(() => {
        if(carttotal>=1000){
            show.textContent=`10% Discount Applied : ${carttotal*0.10} OFF`
            show.style.color='green'
        }
        else if(carttotal>=500){
             show.textContent=`5% Discount Applied  : ${carttotal*0.05} OFF`
            show.style.color='orange'
        }
        else{
            show.textContent=`No Discount `
            show.style.color='red'

        }
    }, 1500);
    total.value=''

})


const inputday = document.getElementById('inputday')
const checkbtn = document.getElementById('daybtn')
const dayresult = document.getElementById('showday')

checkbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let input3 = parseInt(inputday.value)
    dayresult.style.color='green'
    setTimeout(()=>{

        if(input3===1){
            dayresult.textContent='Sunday'
        }
        else if(input3===2){
            dayresult.textContent='Monday'
        }
        else if(input3===3){
            dayresult.textContent='Tuesday'
        }
        else if(input3===4){
            dayresult.textContent='wednesday'
        }
        else if(input3===5){
            dayresult.textContent='Thursday'
        }
       else if(input3===6){
            dayresult.textContent='Friday'
        }
        else if(input3===7){
            dayresult.textContent='Saturday'
        }
        else{
            dayresult.textContent='enter a valid day'
            dayresult.style.color='red'
        }
    })
    inputday.value=''
})


    const ageInput = document.getElementById('ageInput')
    const agebtn = document.getElementById('checkbtn')
    const ageresult = document.getElementById('ageresult')

    console.log(ageInput , agebtn , ageresult);
  agebtn.addEventListener('click',(e)=>{
    e.preventDefault()
        ageresult.textContent='checking....'
        ageresult.style.color='black'

  let input4=parseInt(ageInput.value)
  if (input4<=0||input4===''||input4>100) {
        ageresult.textContent='enter a valid age'
  }
  else{

      setTimeout(() => {
          if (input4>=18) {
              ageresult.textContent="Eligible For Vote";
              ageresult.style.color='green'
          } else {
              ageresult.textContent="Not Eligible"; 
              ageresult.style.color='red'
          }
      }, 1500);
  }
    ageInput.value=''
  })
    
//today
    const input5 = document.getElementById('num')
    const button5 = document.getElementById('checknum')
    const result5 = document.getElementById('numresult')

  button5.addEventListener('click',(e)=>{
    e.preventDefault()
    const val=parseInt(input5.value)
     result5.textContent='checking.....'
      result5.style.color='black'
    setTimeout(() => {
        if (isNaN(val)) {
            result5.textContent='please enter a valid number'
        }
        else{
            if (val%2===0) {
                result5.textContent='Even'
                result5.style.color='green'
            } else {
                result5.textContent='Odd'
                 result5.style.color='red'
            }
        }
    }, 1500);
    input5.value=''
  })

  