// JavaScript for Calculator Logic
function appendNumber(number) {
    const display = document.getElementById('result');
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('result');
    const lastChar = display.value.slice(-1);
    if ('+-*/.'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function backspace() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeLabel = document.getElementById('theme-label');

themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeLabel.textContent = "Light Mode";
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeLabel.textContent = "Dark Mode";
    }
});
