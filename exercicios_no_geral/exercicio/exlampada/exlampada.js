let _over = () => {
    document.querySelector('#luz').src = './img/lampada-acesa.jpg';
}

let _out = () => {
    document.querySelector('#luz').src = './img/lampada-apagada.jpg';
}

document.querySelector('#luz').addEventListener('mouseover', _over);

document.querySelector('#luz').addEventListener('mouseout', _out);



document.querySelector('#luz').addEventListener('click', () => {
    document.querySelector('#luz').src = './img/lampada-quebrada.jpg';
    document.querySelector('#luz').removeEventListener('mouseover', _over);
    document.querySelector('#luz').removeEventListener('mouseout',_out);
});