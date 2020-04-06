let sexo = ""
let olhos = ""
let cabelos = ""
let idade = 0
let maiorIdade = 0
let quantidadeOCCP = 0
let quantidadeF18e35 = 0

for (let i = 1; i <= 100; i++) {
    sexo = prompt("Informe o sexo - Feminino, Masculino");
    olhos = prompt("Informe a cor dos olhos - Azul, Verde, Castanho");
    cabelos = prompt("Informe a cor dos cabelos - Louro, Preto, Castanho");

    idade = parseInt(prompt("Informe a idade"));
    if (idade > maiorIdade) {
        maiorIdade = idade
    }
    if ((sexo == "Feminino" || sexo == "feminino") && idade >= 18 && idade < 35) {
        quantidadeF18e35++
    }
    if ((olhos == "Castanho" || olhos == "castanho") && (cabelos == "Preto" || cabelos == "preto")) {
        quantidadeOCCP++
    }
}
console.log(`A maior idade das pessoas cadastradas é: ${maiorIdade}, o número de pessoas do sexo feminino entre 18 e 35 anos é: ${quantidadeF18e35} e o número de pessoas com olhos castanhos e cabelos pretos é: ${quantidadeOCCP}`)
