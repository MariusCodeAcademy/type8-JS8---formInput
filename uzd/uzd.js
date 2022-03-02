// nusitaikom
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const daugintiEl = document.getElementById('dauginti');
const sudetiEl = document.getElementById('sudeti');
const daugRezultEl = document.getElementById('daug-rezult');

daugintiEl.addEventListener('click', () => {
  console.log('paspaudei');
  // console.log('num1El type ===', typeof num1El.value);
  daugRezultEl.innerHTML = num1El.value * num2El.value;
});

num2El.addEventListener('input', () => {
  daugRezultEl.innerHTML = num1El.value * num2El.value;
});
