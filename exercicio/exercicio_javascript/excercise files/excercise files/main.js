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

//Resolução do 3° da Parte 2

