// // let numeroUm, numeroDois, soma, subtracao, multiplicacao, divisao;

// // numeroUm = prompt("Digite o primeiro numero");
// // numeroDois = prompt("Digite o segundo número");

// // soma = parseInt(numeroUm) + parseInt(numeroDois);
// // subtracao = parseInt(numeroUm) - parseInt(numeroDois);
// // multiplicacao = parseInt(numeroUm) * parseInt(numeroDois);
// // divisao = parseInt(numeroUm) / parseInt(numeroDois);

// // document.write("o resultado da soma é: " + soma + "</br>");
// // document.write("o resultado da subtração é: " + subtracao + "</br>");
// // document.write("o resultado da multiplicação é: " + multiplicacao + "</br>");
// // document.write("o resultado da divisão é: " + divisao);

// // /*Let é uma tag de variação*/

// var a = 2;
// var b = 1;

// a === b;

// document.write(a != b);

//declaração de variavéis 
// let n1, n2, n3, n4, media;


//Atribuição de valores as variavéis
// n1 = 3;
// n2 = 2;
// n3 = 9;
// n4 = 4;

//Operação matemática (Média)
// media = (n1 + n2 + n3 + n4) / 4;

// document.write("o resultado é " + media);

// if (media >= 7) {
//     document.write("A média é igual a: " + media + "</br>");
//     document.write("Aluno Aprovado!");

// }
// else if (media >= 5 && media < 7) {
//     document.write("A média é igual a: " + media + "</br>");
//     document.write("Aluno de Recuperação!");
// }
// else {
//     document.write("A média é igual a: " + media + "</br>");
//     document.write("Aluno Reprovado!");
// }


// let mes = "Setembro";
// switch (mes) {
//     case "Janeiro":
//     case "janeiro":
//         console.log("Você escolheu Janeriro");
//         break;
//     case "Fevereiro": 
//     case "fevereiro":
//         console.log("Você escolheu Fevereiro");
//         break;
//     case "Março": 
//     case "março":
//         console.log("Você escolheu Março");
//         break;
//     case "Abril": 
//     case "janeiro":
//         console.log("Você escolheu Abril");
//         break;
//     case "Maio": console.log("Você escolheu Maio");
//         break;
//     case "Junho": console.log("Você escolheu Junho");
//         break;
//     case "Julho": console.log("Você escolheu Julho");
//         break;
//     case "Agosto": console.log("Você escolheu Agosto");
//         break;
//     case "Setembro": console.log("Você escolheu Setembro");
//         break;
//     case "Outubro": console.log("Você escolheu Outubro");
//         break;
//     case "Novembro": console.log("Você escolheu Novembro");
//         break;
//     case "Dezembro": console.log("Você escolheu Dezembro");
//         break;
//     default:
//         console.log("Você escolheu um mês inválido!");
// }


// Estrutura de Repetição While (Enquanto)

// contador = 10;
// while (contador >= 1) {
//     console.log(contador);
//     contador = contador - 1;

// }

//Estrutura de Repetição do ... While (faça ... enquanto)

// contador = 0;
// do {
//     console.log(contador++);
// }
// while(contador < 10);


// //Estrutura FOR

// for (let i = 0; i <= 5; i++) {
//     for (let j = 10; j >= 0; j--) {
//         console.log("i: " + i + " | j: " + j);

//     }
// }

// Array

// let meses = ["Janeiro", "Fevereiro", "Março,", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// let mes = prompt("Informe o mês em número: ");

// console.log("O mês correspondente é: " + meses[parseInt(mes) - 1]);

// let n1,n2, n3;

// n1 = prompt("Digite o primeiro numero");
// n2 = prompt("Digite o segundo numero");
// n3 = prompt("Digite o terceiro numero");


// if (n1 > n2 && n1 > n3) {
//     console.log ("O maior número é: " + n1);
// }

// else if (n2 > n1 && n2 > n3) {
// console.log ("O maior número é: " + n2);
// }

// else if (n3 > n1 && n3 > n2) {
//     console.log ("O maior número é: " + n3);
// }


// let numero, maior;

// numero = parseInt(prompt(" Informe um número: "));

// maior = numero;    

// while (numero != 0) {
//     if (numero > maior) {    
//         maior = numero;
//     }

//     numero = parseInt(prompt(" Informe um número: "));

// }

// document.write(" MAIOR: " + maior);


// Array

// let meses = ["Janeiro", "Fevereiro", "Março,", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
// let mes = prompt("Informe o mês em número: ");
// console.log("O mês correspondente é: " + meses[parseInt(mes) - 1]);



// OUTRO MODO DE RESOLVER O EXERCICIO 2 (Fazer depois!)

// let pessoas = ["Pedro", "Magno", "Augusto", "Carlos", "Alexandre"];
// let nomes = prompt("informe um número: ");
// console.log("O valor correspondente é: " + pessoas[parseInt(nomes) - 1]);



//Estrutura de Repetição do ... While (faça ... enquanto)

// contador = 0;
// do {
//     console.log(contador++);
// }
// while(contador < 10);









// Resolução do 1º exercício


// let numero1, numero2, numero3, numero4;

// numero1 = prompt("Digite o primeiro número");
// numero2 = prompt("Digite o segundo número");
// numero3 = prompt("Digite o terceiro número");
// numero4 = prompt("Digite o quarto número");

// if (parseInt(numero1) >= parseInt(numero2) && parseInt(numero1) >= parseInt(numero3) && parseInt(numero1) >= parseInt(numero4)) {
//     console.log("O maior número é: " + numero1);
// }

// else if (parseInt(numero2) >= parseInt(numero1) && parseInt(numero2) >= parseInt(numero3) && parseInt(numero2) >= parseInt(numero4)) {
//     console.log("O maior número é: " + numero2);
// }

// else if (parseInt(numero3) >= parseInt(numero2) && parseInt(numero3) >= parseInt(numero1) && parseInt(numero3) >= parseInt(numero4)) {
//     console.log("O maior número é: " + numero3);
// }

// else {
//     console.log("O maior número é: " + numero4);
// }



// modo simplificado do 1º exercício

// let n1,n2, n3;

// n1 = prompt("Digite o primeiro numero");
// n2 = prompt("Digite o segundo numero");
// n3 = prompt("Digite o terceiro numero");


// if (n1 > n2 && n1 > n3) {
//     console.log ("O maior número é: " + n1);
// }

// else if (n2 > n1 && n2 > n3) {
// console.log ("O maior número é: " + n2);
// }

// else if (n3 > n1 && n3 > n2) {
//     console.log ("O maior número é: " + n3);
// }




// Resolução do 2º exercício!

// let pessoas = ["Pedro", "Magno", "Augusto", "Carlos", "Alexandre"];
// console.log("A lista possui " + pessoas.length + " dados!");



// Resolução do 3º exercício!

// let num1, num2;

// num1 = 3;
// num2 = 5;

// soma = parseInt(num1) + parseInt(num2);
// subtracao = parseInt(num1) - parseInt(num2);
// divisao = parseInt(num1) / parseInt(num2);
// multiplicacao = parseInt(num1) * parseInt(num2);

// console.log("O resultado da operação é: " + soma);
// console.log("O resultado da operação é: " + subtracao);
// console.log("O resultado da operação é: " + divisao);
// console.log("O resultado da operação é: " + multiplicacao);




// Resolução do 4º exercício!

// let galera = ["Zezinho", "Pedrinho", "Toninho", "Abelzinho", "Dadinho", "Felipinho", "Chiquinho"].sort()
//     console.log("A ordem correta é: " + galera);



// Resolução do 5º exercício!

// let usuario = ["Zezinho", "Pedrinho", "Toninho", "Abelzinho", "Zezinho", "Dadinho", "Felipinho", "Chiquinho", "Zezinho"]

// contador = 0

// for (let vassoura = 0; vassoura < usuario.length; vassoura++) {
//     if (usuario[vassoura] == "Zezinho") {
//         contador++
//     }
// }

// console.log("Zezinho aparece " + contador + " vezes na lista!");


// Resolução do 6º exercício!

// let palavra = prompt("Escreva algo aqui!");
// function inverter(palavra) {
//   return palavra.split("").reverse().join("");
// }
// document.write(inverter(palavra));





// Exercício da aula 12/02


