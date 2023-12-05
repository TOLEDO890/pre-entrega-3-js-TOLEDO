let currentInput = '';
let currentOperation = '';
let storedInput = ''; 

const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons');

const appendNumber = number => {
  currentInput += number;
  updateDisplay();
};

const setOperation = operation => {
  if (currentInput !== '') {
    if (currentOperation !== '') {
      calculateResult(); 
    } else {
      storedInput = currentInput; 
      currentInput = ''; 
    }
    currentOperation = operation;
    updateDisplay();
  }
};

const calculateResult = () => {
  try {
    const result = eval(`${storedInput} ${currentOperation} ${currentInput}`);
    currentInput = result.toString();
    currentOperation = '';
    storedInput = '';
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
  }
};

const clearDisplay = () => {
  currentInput = '';
  currentOperation = '';
  storedInput = '';
  updateDisplay();
};

const updateDisplay = () => {
  display.value = `${currentInput} ${currentOperation}`;
};

const createButton = (text, action) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = action;
  buttonsContainer.appendChild(button);
};

const initializeCalculator = () => {
  createButton('7', () => appendNumber(7));
  createButton('8', () => appendNumber(8));
  createButton('9', () => appendNumber(9));
  createButton('+', () => setOperation('+'));
  createButton('4', () => appendNumber(4));
  createButton('5', () => appendNumber(5));
  createButton('6', () => appendNumber(6));
  createButton('-', () => setOperation('-'));
  createButton('1', () => appendNumber(1));
  createButton('2', () => appendNumber(2));
  createButton('3', () => appendNumber(3));
  createButton('*', () => setOperation('*'));
  createButton('0', () => appendNumber(0));
  createButton('C', clearDisplay);
  createButton('=', calculateResult);
  createButton('/', () => setOperation('/'));
};

initializeCalculator();


