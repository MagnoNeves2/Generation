document.getElementById('btnArea').addEventListener('click', () => {
    let raio = document.getElementById('raio').value;
    let pi = Math.PI;
    let area = pi * Math.pow(raio,2);
    document.write('A área do círculo é: ' + Math.round(area));
})