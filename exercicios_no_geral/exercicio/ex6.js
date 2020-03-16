document.getElementById('btnConversor').addEventListener('click', () => {
    let fahrenheit1 = parseFloat(document.getElementById('numeroDigitado').value);
    let celsius1 = (5 * (fahrenheit1 - 32) / 9);
    document.write('O valor em graus Celsius é: ' + celsius1 + "°");
});

document.getElementById('numeroDigitado').addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        let celsius2 = parseFloat(document.getElementById('numeroDigitado').value);
        let fahrenheit2 = celsius2 * 1.8 + 32;
        document.write('O valor em graus Fahrenheit é: ' + fahrenheit2 + "°");
    }
});