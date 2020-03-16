function getFormvalue() {
    let primeiroNome = document.querySelector('input').value;
    let ultimoNome = document.getElementById('segundo').value;
    document.write(`O primeiro nome é: ${primeiroNome} e do ultimo é ${ultimoNome}!`)
};


// Outros modos de fazer o exercício!
/*function getFormvalue() {
    let primeiroNome = document.getElementsByTagName('input')[0].value;
    let ultimoNome = document.getElementsByTagName('input')[1].value;
    document.write(`O primeiro nome é: ${primeiroNome} e do ultimo é ${ultimoNome}!`)
};*/

// O botão submit por padrão confirma o envio de dados mas atualiza a tela e com isso não dá para ver o resultado no console... Para prevenir isso, usamos a função preventDefault(). É necesário atribuir antes da função um parametro ao qual ele agirá. 