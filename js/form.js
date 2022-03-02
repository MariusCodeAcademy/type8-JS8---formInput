'use strict';
console.log('hello form');

// nusitaikyti i el
const formEl = document.getElementById('userForm');
const usernameEL = document.getElementById('username');
const emailEL = document.getElementById('email');
const townSelectEl = document.getElementById('town');
// result EL
const out1El = document.getElementById('out1');
const out2El = document.getElementById('out2');
const out3El = document.getElementById('out3');
// debugger;
// visada tuscia
// const usernameValue = usernameEL.value;

// uzdeti event pasilklausyma ir sustabdyti siuntima
formEl.addEventListener('submit', (event) => {
  // stabdom funkcija nuo submit
  event.preventDefault();
  console.log('in controll');
  // clear errors
  usernameEL.nextElementSibling.textContent = '';
  // reiksmiu paemimas
  const usernameValue = usernameEL.value;
  const emailValue = emailEL.value;
  const townValue = townSelectEl.value;

  // validation
  if (usernameValue.length <= 3) {
    // nusitaikom i po input einanti el
    usernameEL.nextElementSibling.textContent = 'Per trumpas username';
    return;
  }

  // reiksmiu perkelimas i rezultatus
  out1El.textContent = usernameValue;
  out2El.textContent = emailValue;
  out3El.textContent = townValue;
});
