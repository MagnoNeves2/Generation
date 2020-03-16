"use strict";
class Disciplina {
    //Construtor da class Disciplina
    constructor(nome) {
        this.nome = nome; //(this.) serve para "chamar" o atributo da classe.
    }
    // Métodos da class Disciplina
    calcularAprovacao(nomeAluno, notaAluno) {
        if (notaAluno >= Disciplina.media) {
            return `${nomeAluno} aprovado(a) em ${this.nome}`;
        }
        else {
            return `${nomeAluno} reprovado(a) em ${this.nome}`;
        }
    }
}
// ATRIBUTOS   
Disciplina.media = 7;
// Instanciação de um Objeto da Class Disciplina
let materia = new Disciplina('Matemática');
console.log(materia.calcularAprovacao('Magão', 7));
console.log(materia.calcularAprovacao('Patrick Lula Molusco da Silva', 4));
console.log(materia);
// Após converter o arquivo ts possívelmente apresentará erro se ambos os arquivos estiverem na mesma pasta, mas ignore. POR ISSO SE DEVE CRIAR UMA OUTRA PASTA EM QUE SERÁ COLOCADO O NOVO ARQUIVO.
// quando se usa um atributo estatico (static), não é necessário instanciar um objeto e pode ser acessado em qualquer lugar! Pode ser chamado direto pelo class, tipo: (Disciplina.media) 
