let history = [];

function clearScreen() {
    document.getElementById('result').value = '';
    document.getElementById('history').innerText = '';
}

function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        let evalResult = eval(result);
        document.getElementById('result').value = evalResult;
        history.push(`${result} = ${evalResult}`);
        updateHistory();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function backspace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function updateHistory() {
    let historyElement = document.getElementById('history');
    historyElement.innerText = history.join('\n');
}


