let currentNumberWrapper = document.getElementById('currentNumber');
let btnAdicionar = document.getElementById('adicionar');
let btnSubtrair = document.getElementById('subtrair');
let currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if(currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'green';
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if(currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'green';
  }
}

btnAdicionar.addEventListener('click', increment);
btnSubtrair.addEventListener('click', decrement);