//Resolução da parte 1
// function validateForm() {
//     let email = document.getElementById('email').value;
//     let emailSegmento = email.length;

//     function mostra(frase) {
//         document.write('O email é: ' + email + "<br>" + "A senha fornecida é: " + senha);
//     }

//     let senha = document.getElementById('password').value;
//     let senhaSegmento = senha.length;

//     if (emailSegmento < 1) {
//         document.getElementById("alert-email").innerHTML = "Campo Vazio - Não vai passar truta!";
//         document.getElementById("alert-email").style.visibility = "visible";
//     }

//     else if (!email.includes('@')) {
//         document.getElementById("alert-email").innerHTML = "Está faltando o @ - Não vai passar truta!";
//         document.getElementById("alert-email").style.visibility = "visible";
//     }

//     else if (!email.endsWith('.com') && !email.endsWith('.br') && !email.endsWith('.co') && !email.endsWith('.org') && !email.endsWith('.net')) {
//         document.getElementById("alert-email").innerHTML = "Está faltando o (.com), (.br), (.co), (.org), (.net) - Não vai passar truta!";
//         document.getElementById("alert-email").style.visibility = "visible";
//     }

//     else {
//         document.getElementById('alert-email').style.visibility = 'hidden';
//     }

//     if (senhaSegmento < 6) {
//         document.getElementById("alert-password").innerHTML = "Senha menor do que 6 caracteres - Não vai passar truta!";
//         document.getElementById("alert-password").style.visibility = "visible";
//     }

//     else {
//         document.getElementById('alert-password').style.visibility = 'hidden';
//         return mostra();
//     }
// }


//Resolução do 1°exercício da Parte 2
// let num = "32243";
// let resultado = num.split("").reverse("").join("");
// console.log('O resultado é: ' + resultado);


//Resolução do 2° da Parte 2
// function palindromo() {
//     let nomeInformado = document.getElementById('nome').value;
//     let inverso = nomeInformado.split('').reverse('').join('');

//     if (inverso == nomeInformado) {
//         document.write("Esse nome é um Palíndromo! Meus parabéns 🤯 ");
//     }

//     else {
//         document.write('Esse nome não é um Palíndromo! 🌚 ')
//     }
// }

// document.querySelector('#btnVerificador').addEventListener('click', () => {
//     palindromo();
// });

// document.getElementById('nome').addEventListener('keypress', (event) => {
//     if (event.key == 'Enter') {
//         palindromo();
//     }
// });


//Resolução do 3° da Parte 2
// let nome = "magnomagno ";
// let letras = nome.split('')
// for (let i = 0; i <= 10; i++) {
//     for (let j = 10; j >= 0; j--) {
//         console.log(letras[i] + letras[j]);
//     }
// }


//Resolução do 4° da Parte 2
// function resolucao() {
//     let palavraInserida = document.getElementById('palavra').value;
//     let palavraPartida = palavraInserida.split('');
//     let palavraOrdem = palavraPartida.sort();
//     document.write('A palavra em ordem alfabética é: ' + palavraOrdem)
// }

// document.getElementById('btnConversor').addEventListener('click', () => {
//     resolucao();
// });

// document.querySelector('#palavra').addEventListener('keypress', (event) => {
//     if (event.key == 'Enter') {
//         resolucao();
//     }
// });

// Resolução do 5° da Parte 2
// function maiusculo(texto) {
//     let linha = texto.split(' ');
//     let novaLinha = [];

//     for (let correr = 0; correr < linha.length; correr++) {
//         novaLinha.push(linha[correr].charAt(0).toUpperCase() + linha[correr].slice(1));
//     }
//     return novaLinha.join(' ');
// }
// console.log(maiusculo("magno de oliveira neves"));

// Resolução do 6° da Parte 2
function maior(texto) {
    let palavra = texto.split(' ');
    let maiorPalavra = "";
    for (x = 0; x < palavra.length; X++) {
        if () {

        }
    }


}