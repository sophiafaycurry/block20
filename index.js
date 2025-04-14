// TODO: this file! :)
// ==== DOM Elements ====
const form = document.querySelector('form');
const numberInput = document.querySelector('#number');
const numberBankOutput = document.querySelector('#numberBank output');
const sortOneBtn = document.querySelector('#sortOne');
const sortAllBtn = document.querySelector('#sortAll');
const oddsOutput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');

// ==== State ====
let numberBank = [];
let odds = [];
let evens = [];

// ==== Helper Function to Render Outputs ====
function render() {
  numberBankOutput.textContent = numberBank.join(', ');
  oddsOutput.textContent = odds.join(', ');
  evensOutput.textContent = evens.join(', ');
}

// ==== Add Number to Bank ====
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const value = numberInput.value;
  const num = Number(value);

  if (!isNaN(num)) {
    numberBank.push(num);
  }

  numberInput.value = '';
  render();
});

// ==== Sort 1 Number ====
sortOneBtn.addEventListener('click', function () {
  if (numberBank.length === 0) return;

  const number = numberBank.shift();

  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }

  render();
});

// ==== Sort All Numbers ====
sortAllBtn.addEventListener('click', function () {
  numberBank.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  });

  numberBank = [];
  render();
});