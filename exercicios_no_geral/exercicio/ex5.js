document.getElementById('btnConversor').addEventListener('click', () => {
    let fahrenheit = parseFloat(document.querySelector('#fahrenheit').value);
    let celsius = (5 * (fahrenheit - 32) / 9);
    document.write('O valor em graus Celsius é: ' + celsius + "°");
});