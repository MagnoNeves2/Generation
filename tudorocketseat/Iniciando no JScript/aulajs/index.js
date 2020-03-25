// criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da média

/* ================================================

    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

    ================================================*/

/* ===================================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira
    || "OU" Uma das condições deve ser verdadeiras
        para que a condição final seja verdadeira
    !   "NÃO" Nega uma condição

======================================================*/

/* =====================================================
    OPERADORES ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    -   Subtração

=======================================================*/


/*console.log(2 * 2) //4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0*/



/* // DESAFIO 1 - Usando operadores lógicos (mó rôle...)
const idade = 18;
// Verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if (!(idade >= 18) || idade === 17) {
    console.log("Bloquear a entrada")
    console.log("Voltar quando fizer 18 anos")
}
else {
    console.log("Deixar entrar")
}*/



/*console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 != 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //false*/



/*// DESAFIO 1
const idade = 17;
// Verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if (idade >= 18) {
    console.log("Deixar entrar")
}
else {
    console.log("Bloquear a entrada")
}

// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if(idade === 17){
    console.log("Volte quando tiver 18")
}*/




/*console.log(4 == '4') //true pois está levando em consideração o valor
console.log(4 === '4') //false pois está levando em consideração o tipo tbm
console.log(4 != '5') //true pois é diferente mesmo
console.log(4 !== '5') //true é diferente mesmo inclusive do tipo*/



/*console.log(5 > 4) //true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //true*/




// se a média for maior que 5, parabenizar a turma.
/*const aluno01 = 'Mayk'
const notaAluno01 = 9.8;

const aluno2 = 'Diego';
const notaAluno02 = 10;

const aluno03 = 'Fulano'
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;


if (media < 5){
    console.log(`A media foi de ${media}. parabéns`);
}

else {
console.log('A media é menor que 5.')
}*/



/*const aluno01 = 'Mayk'
const aluno2 = 'Diego';
const notaAluno1 = 9.8;
console.log(typeof aluno01)*/
// (typeof) serve para dizer o tipo a ser analizado da variavel.



/*const nome = "Mayk";
const nome2 = 'Diego';
const nome3 = `Valeska e ${nome}`;*/
// (``) quando o termo está com essa pontuação é um templeat string, pode-se colocar uma variavel dentro chamando outra variavel...
