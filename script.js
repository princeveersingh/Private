let display = document.getElementById("display");

function appendValue(value) {
    let lastChar = display.value.slice(-1);

    // Prevent invalid operators
    if (isOperator(lastChar) && isOperator(value)) return;

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
