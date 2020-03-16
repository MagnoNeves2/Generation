document.querySelector('#btn').addEventListener('click', () => {
    let m = document.querySelector('#metros').value; // capturar o valor do input
    let cm = m * 100;
    document.write(cm + "cm");
});