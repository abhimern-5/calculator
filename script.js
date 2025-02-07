let displayValue = '';

function appendToDisplay(value) {
  if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'log' || value === 'sqrt') {
    displayValue += value + '(';
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function calculate() {
  try {
    let result = evaluateExpression(displayValue);
    if (!isFinite(result)) {
      throw new Error("Can't divide by zero!");
    }
    displayValue = result;
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function evaluateExpression(expression) {
  // Use the math.js library to evaluate the expression
  // This function is called by calculate() after the user clicks "="
  return math.evaluate(expression);
}
