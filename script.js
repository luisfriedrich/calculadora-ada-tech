function concatenarAoResultado(value) {
    document.getElementById('result').value += value;
}

function limparResultado() {
    document.getElementById('result').value = '';
}

function calcularResultado() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Erro';
    }
}
