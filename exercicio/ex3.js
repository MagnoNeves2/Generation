document.querySelector('#btnConversor').addEventListener('click', () => {
    let cm = parseFloat(document.querySelector('#cm').value);
    let polegada = cm * 0.393701;
    document.write("Polegada: " + polegada);
});