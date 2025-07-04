const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(body)
console.log(buttons);
console.log(buttons);

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (btn.id === 'grey') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (btn.id === 'white') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (btn.id === 'blue') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (btn.id === 'yellow') {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});


