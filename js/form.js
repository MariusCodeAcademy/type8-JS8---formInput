'use strict';
console.log('hello form');

// nusitaikyti i el
const formEl = document.getElementById('userForm');
const usernameEL = document.getElementById('username');
const emailEL = document.getElementById('email');
const townSelectEl = document.getElementById('town');
const rangeEl = document.getElementById('points');

// result EL
const out1El = document.getElementById('out1');
const out2El = document.getElementById('out2');
const out3El = document.getElementById('out3');
const sliderValueEl = document.querySelector('.value');

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
  // reiksmiu paemimas // trim nukerpa tuscius tarpus prieky ir gale
  const usernameValue = usernameEL.value.trim();
  const emailValue = emailEL.value;
  const townValue = townSelectEl.value;
  const rangeValue = rangeEl.value;
  console.log('rangeValue ===', rangeValue);

  // validation
  if (!isValid(usernameValue)) {
    return;
  }

  // reiksmiu perkelimas i rezultatus
  valuesToResults(usernameValue, emailValue, townValue);
});

function valuesToResults(usernameValue, emailValue, townValue) {
  // reiksmiu perkelimas i rezultatus
  out1El.textContent = usernameValue;
  out2El.textContent = emailValue;
  out3El.textContent = townValue;
}

function isValid(value) {
  if (value.length <= 3) {
    usernameEL.nextElementSibling.textContent = 'Per trumpas username';
    return false;
  } else {
    return true;
  }
}

// range handler
rangeEl.addEventListener('input', sliderValueHandle);

function sliderValueHandle(event) {
  // const sliderValueEl = document.querySelector('.value');
  // event.target - yra rangeEl
  // event.target.value - dabartine reiksme
  const reiksme = event.target.value;
  // ikelti reiksme is sliderio i  <strong class="value"></strong>
  sliderValueEl.textContent = reiksme;
  // console.log(event);
}

function startValueSlider() {
  sliderValueEl.textContent = rangeEl.value;
}
startValueSlider();
