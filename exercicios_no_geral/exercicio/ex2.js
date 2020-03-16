document.getElementById('teste').addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let numeroDigitado = document.querySelector('input').value;
        document.write('O valor em centímetros é: ' + (numeroDigitado * 100));
    }
})

// document.querySelector('btn').addEventListener('click', () => {
//     let m = document.querySelector()
// })