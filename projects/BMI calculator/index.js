const form = document.querySelector('form');
const result = document.querySelector('#results')
// console.log(form)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  console.log(height);
  console.log(weight);

  if(height==="" || height<=0 || isNaN(height)){
    result.innerHTML= `please enter a valid height ${height} is not valid`
  }
  else if(weight==="" || weight<=0 || isNaN(weight))
   {
    result.innerHTML= `please enter a valid weight ${weight} is not valid`
    }
    else{
    const res =  (weight/ ((height/100)*(height/100))).toFixed(2);
    result.innerHTML=`BMI score:- ${res}`
    }
  
});
