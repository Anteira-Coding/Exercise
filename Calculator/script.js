let operand1 = 0;
let operand2 = null;
let currentOperator = null;
let result = 0;
let screen = document.getElementById('screen');

function appendToScreen(value) {
	screen.value += value;
}

function clearScreen() {
	screen.value = '';
	operand1 = 0;
	operand2 = null;
	currentOperator = null;
	result = 0;
}

function backspace() {
	screen.value = screen.value.slice(0, -1);
}

function calculate(operator, operand) {
	if (currentOperator === null) {
		operand1 = parseFloat(screen.value);
		currentOperator = operator;
		screen.value = '';
	} else {
		operand2 = parseFloat(screen.value);
		switch (currentOperator) {
			case '+':
				result = operand1 + operand2;
				break;
			case '-':
				result = operand1 - operand2;
				break;
			case '*':
				result = operand1 * operand2;
				break;
			case '/':
				if (operand2 === 0) {
					alert('Cannot divide by zero');
					return;
				}
				result = operand1 / operand2;
				break;
		}
		screen.value = result;
		operand1 = result;
		operand2 = null;
		currentOperator = operator;
	}
}