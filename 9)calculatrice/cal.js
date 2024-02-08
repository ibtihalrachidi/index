function appendToResult(value) {
    document.calculatorForm.result.value += value;
}

function clearResult() {
    document.calculatorForm.result.value = '';
}

function calculateResult() {
    try {
        const result = eval(document.calculatorForm.result.value);
        document.calculatorForm.result.value = result;
    } catch (error) {
        document.calculatorForm.result.value = 'Error';
    }
}